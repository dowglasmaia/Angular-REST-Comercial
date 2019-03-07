import { ConfirmationService } from 'primeng/api';
import { Component, OnInit } from '@angular/core';

import { CompraRequisaoService } from './../../../services/compras/compra-requisao.service';
import { CompraRequisicao } from 'src/app/model/classes/compra-requisicao';
import { VariaveisGlobais } from 'src/app/model/variaveis-globais';
import { ObjectUtils } from 'primeng/components/utils/objectutils';

@Component({
  selector: 'app-compra-requisicao',
  templateUrl: './compra-requisicao.component.html',
  styleUrls: ['./compra-requisicao.component.css']
})
export class CompraRequisicaoComponent implements OnInit {


  cols: any[];

  compraRequisicao: CompraRequisicao[];

  requisicaoSelecionada: CompraRequisicao;

  botoesDesabilitado: boolean = true;

  constructor(
    private compraRequisicaoService: CompraRequisaoService,
    private confirmationService: ConfirmationService,
    private global: VariaveisGlobais,
    private objectUtils: ObjectUtils) { }


  ngOnInit() {
    /* Alterando o Titulo da Pagina Dinamicamente */
    this.global.tituloJanela = 'Lista de Requisições !';

    this.carregaDados();   

    this.cols = [
      { field: 'id', header: 'Código ' },
      { field: 'compraTipoRequisicao.nome', header: 'Nome' },
      { field: 'colaborador.pessoa.nome', header: 'Colaborador' },
      { field: 'dataRequisicao', header: 'Data' },
      
    ];

  } 

  /* Metodo Para Resolver a Questão  dos campos com vinculações a outros objetos*/
  resolveFieldData(data, field){
   return this.objectUtils.resolveFieldData(data, field);
  }


  /* Carrega Dados do Servidor */
  private carregaDados() {
    this.compraRequisicaoService.getCompraRequisicoes().subscribe(lista => {
      this.compraRequisicao = lista;

      console.log(this.compraRequisicao);

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
  /* /fim */

  /* Retorna o Requisicao selecionado*/
  getIdRequisicao() {
    return this.requisicaoSelecionada == null ? null : this.requisicaoSelecionada.id;
  }

  /* Excluir com Dialog de Confirmação */
  excluir() {
    this.confirmationService.confirm({
      message: 'Desenja realmente excluir este registro?',
      header: 'Confirmação!',
      icon: 'pi pi-exclamation-triangle',

      accept: () => {
        this.compraRequisicaoService.excluir(this.requisicaoSelecionada.id).subscribe(x => {
          this.carregaDados(); // para Atualizar a Lista Apos a Exclusão
          this.botoesDesabilitado = true; /*Desabilita os Butões au Excluir */

          this.global.mostraMsg(this.global.info, 'Registro exluido com sucesso!', '');
        }, error => {
          this.global.mostraMsg(this.global.error, 'Ocorreu um Error', this.global.trataError(error));
        });

      },
      reject: () => {
        //this.msgs = [{ severity: 'info', summary: 'Cancelado', detail: 'Operação Cancelado com Sucesso!' }];
      }

    });
  }

}
