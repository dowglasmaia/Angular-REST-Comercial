import { Cargo } from './../../../model/classes/cargo';
import { Component, OnInit } from '@angular/core';


import { CargoService } from 'src/app/services/cadastros/cargo.service';

import { ConfirmationService } from 'primeng/api';
import { VariaveisGlobais } from 'src/app/model/variaveis-globais';

@Component({
  selector: 'app-cargo',
  templateUrl: './cargo.component.html',
  styleUrls: ['./cargo.component.css'],

})
export class CargoComponent implements OnInit {

  cols: any[];

  cargos: Cargo[];

  cargoSelecionado: Cargo;

  botoesDesabilitado: boolean = true;

  constructor(
    private cargoService: CargoService,
    private confirmationService: ConfirmationService,
    private global: VariaveisGlobais) { }


  ngOnInit() {
    /* Alterando o Titulo da Pagina Dinamicamente */
    this.global.tituloJanela = 'Listagem de Cargos!';

    this.carregaDados();

    this.cols = [
      { field: 'id', header: 'Código ' },
      { field: 'nome', header: 'Nome' },
      { field: 'descricao', header: 'Descriçao' },
      { field: 'salario', header: 'Salário' },
      { field: 'cbo1994', header: 'CBO 1994' },
      { field: 'cbo2002', header: 'CBD 2002' }
    ];

  } /* / ngOnInit */

  /* Carrega Dados do Servidor */
  private carregaDados() {
    this.cargoService.getCargos().subscribe(lista => {
      this.cargos = lista;
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

  /* Retorna o cargo selecionado com*/
  getIdCargo() {
    return this.cargoSelecionado == null ? null : this.cargoSelecionado.id;
  }

  /* Excluir com Dialog de Confirmação */
  excluir() {
    this.confirmationService.confirm({
      message: 'Desenja realmente excluir este registro?',
      header: 'Confirmação!',
      icon: 'pi pi-exclamation-triangle',

      accept: () => {
        this.cargoService.excluir(this.cargoSelecionado.id).subscribe(x => {
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
