import { CompraRequisicaoDetalhe } from './../../../../model/classes/compra-requisicao-detalhe';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { CompraRequisaoService } from './../../../../services/compras/compra-requisao.service';
import { CompraTipoRequisiacaoService } from './../../../../services/compras/compra-tipo-requisiacao.service';
import { CompraRequisicao } from 'src/app/model/classes/compra-requisicao';
import { Colaborador } from 'src/app/model/classes/colaborador';
import { CompraTipoRequisicao } from 'src/app/model/classes/compra-tipo-requisicao';
import { ColaboradorService } from 'src/app/services/cadastros/colaborador.service';
import { VariaveisGlobais } from 'src/app/model/variaveis-globais';
import { ObjectUtils } from 'primeng/components/utils/objectutils';
import { Produto } from 'src/app/model/classes/produto';
import { ProdutoService } from 'src/app/services/compras/produto.service';
import { CompraReqCotacaoDetalhe } from './../../../../model/classes/compra-req-cotacao-detalhe';

@Component({
  selector: 'app-compra-requisicao-detalhes',
  templateUrl: './compra-requisicao-detalhes.component.html',
  styleUrls: ['./compra-requisicao-detalhes.component.css']
})
export class CompraRequisicaoDetalhesComponent implements OnInit {

  /* Colunas da Tabela de Detalhes*/
  cols: any[];
  display: boolean = false;
  filtroProduto: Produto[];

  detalheSelecionada: CompraRequisicaoDetalhe;
  botoesDesabilitado: boolean = true; 

  /*  ===  */

  compraRequisicao: CompraRequisicao;
  filtroColaborador: Colaborador[];
  filtroTipoRequisicao: CompraTipoRequisicao[];

  formGroup: FormGroup;

  constructor(
    private compraRequisicaoService: CompraRequisaoService,
    private tipoRequisicaoService: CompraTipoRequisiacaoService,
    private colaboradorservice: ColaboradorService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
    private global: VariaveisGlobais,
    private formBuilder: FormBuilder,
    private objectUtils: ObjectUtils,
    private produtoService: ProdutoService
  ) { }

  ngOnInit() {

    /* incluir os Dados do Formulario*/
    this.formGroup = this.formBuilder.group({
      'id': new FormControl(''),
      'colaborador': new FormControl('', Validators.required),
      'compraTipoRequisicao': new FormControl('', Validators.required),
      'dataRequisicao': new FormControl('', Validators.required),
    })

    /* =========== Detalhes da Cotação =========== */
    this.cols = [
      { field: 'produto.descricao', header: 'Produto' },
      { field: 'quantidade', header: 'Qtda' },
      { field: 'quantidadeCotada', header: 'Qtda Cotada' },
      { field: 'itemCotado', header: 'Item Cotado' },
    ];   

    /* =========== =========== */
    this.global.tituloJanela = 'Cadastro de Requisiçao!';
    this.compraRequisicao = new CompraRequisicao();
    this.detalheSelecionada = new CompraRequisicaoDetalhe();

    if (this.router.url !== '/compra-requisicao/novo') {

      /* pegado o paramento na rota ativa */ // usando o parseInt para converter o Number para String
      let id = this.route.snapshot.paramMap.get('id');
      this.compraRequisicaoService.getCompraRequisicaoId(parseInt(id, 0)).subscribe(
        obj => {
          this.compraRequisicao = obj;
          console.log(this.compraRequisicao)
          /* Vinculando o FormGroup com o Objeto Colaborador*/
          this.formGroup.patchValue(this.compraRequisicao);
        }, error => {
          this.global.mostraMsg(this.global.error, 'Ocorreu um Error', this.global.trataError(error));
        });
    }
  } /*/ngOnInit */


  /* Metodo Para Resolver a Questão  dos campos com vinculações a outros objetos*/
  resolveFieldData(data, field){
    return this.objectUtils.resolveFieldData(data, field);
   }

  //Retornar
  retornar() {
    this.location.back();
  }

  /* salvar */
  salvar() {
    this.compraRequisicaoService.salvar(this.compraRequisicao).subscribe(
      obj => {
        this.compraRequisicao = obj;

        this.global.mostraMsg(this.global.success, 'MaiaTI Sistemas: ', 'Registro salvo com Sucesso!');

        this.router.navigate(['/compra-requisicao']); /*Retornando para a Tala de Lista quando Obj for Salvo */
      }, error => {
        this.global.mostraMsg(this.global.error, 'Ocorreu um Error', this.global.trataError(error));
      });
  }

  /* Fazendo a Submissão dos Dados do Formulario - vinculados com FormGroup*/
  onSubmit(value) {
    this.compraRequisicao = value as CompraRequisicao;
    this.salvar();
  }

  /* Busca por Tipo de Requisição  */
  buscarTipoRequisicao(event) {
    this.tipoRequisicaoService.getListaCompraTipoRequisicaos(event.query).subscribe(
      obj => {
        this.filtroTipoRequisicao = obj;
      }, error => {
        this.global.mostraMsg(this.global.error, 'Ocorreu um Error', this.global.trataError(error));
      });
  }

  /* Busca Colocaborador Por Nome  */
  buscarPorColaborador(event) {
    this.colaboradorservice.getColaboradorPorNome(event.query).subscribe(
      obj => {
        this.filtroColaborador = obj;
      }, error => {
        this.global.mostraMsg(this.global.error, 'Ocorreu um Error', this.global.trataError(error));
      });
  }

  /* Eventos ao selecionar uma coluna da tabela */
  onRowSelect(event) {
    this.botoesDesabilitado = false;
  }

  onRowUnselect(event) {
    this.botoesDesabilitado = true;
  }

  /* Buscar produto */
  buscarPorProduto(event){
    this.produtoService.getProdutosPorNome(event.query).subscribe(
      obj => {
        this.filtroProduto = obj;
      }, error => {
        this.global.mostraMsg(this.global.error, 'Ocorreu um Error', this.global.trataError(error));
      });
  }

  /* Chama modal*/
  showDialog() {
    this.display = true;
}
 

}