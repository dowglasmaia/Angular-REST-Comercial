import { Message } from 'primeng/components/common/api';
import { Cargo } from './../../../classes/cadastros/cargo';
import { Component, OnInit } from '@angular/core';
import { CargoService } from 'src/app/services/cadastros/cargo.service';

import { ConfirmationService } from 'primeng/api';

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

  /* Messagem do primeNG */
  msgs: Message[] = [];

  constructor(
    private cargoService: CargoService,
    private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.cargos = this.cargoService.getCargos();

    this.cols = [
      { field: 'id', header: 'Código ' },
      { field: 'nome', header: 'Nome' },
      { field: 'descricao', header: 'Descriçao' },
      { field: 'salario', header: 'Salário' },
      { field: 'cbo1994', header: 'CBO 1994' },
      { field: 'cbo2002', header: 'CBD 2002' }
    ];
  } /* /ngOnInit */

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
        this.cargoService.excluir(this.cargoSelecionado);

        this.msgs = [{ severity: 'warn', summary: '', detail: 'Registro Excluido com Sucesso!' }];
      },
      reject: () => {
        //this.msgs = [{ severity: 'info', summary: 'Cancelado', detail: 'Operação Cancelado com Sucesso!' }];
      }

    });
  }


}
