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


@Component({
  selector: 'app-compra-requisicao-detalhes',
  templateUrl: './compra-requisicao-detalhes.component.html',
  styleUrls: ['./compra-requisicao-detalhes.component.css']
})
export class CompraRequisicaoDetalhesComponent implements OnInit {

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
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {

    /* incluir os Dados do Formulario*/
    this.formGroup = this.formBuilder.group({
      'id': new FormControl(''),
      'colaborador': new FormControl('', Validators.required),
      'compraTipoRequisicao': new FormControl('', Validators.required),
      'dataRequisicao': new FormControl('', Validators.required)

    })
    /* =========== =========== */
    this.global.tituloJanela = 'Cadastro de Requisiçao!';
    this.compraRequisicao = new CompraRequisicao();

    if (this.router.url !== '/compra-requisicao/novo') {

      /* pegado o paramento na rota ativa */ // usando o parseInt para converter o Number para String
      let id = this.route.snapshot.paramMap.get('id');
      this.compraRequisicaoService.getCompraRequisicaoId(parseInt(id, 0)).subscribe(
        obj => {
          this.compraRequisicao = obj;

          /* Vinculando o FormGroup com o Objeto Colaborador*/
          this.formGroup.patchValue(this.compraRequisicao);
        }, error => {
          this.global.mostraMsg(this.global.error, 'Ocorreu um Error', this.global.trataError(error));
        });
    }
  } /*/ngOnInit */


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

}
