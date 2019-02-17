import { Cargo } from './../../../classes/cadastros/cargo';
import { Component, OnInit } from '@angular/core';
import { CargoService } from 'src/app/services/cadastros/cargo.service';

@Component({
  selector: 'app-cargo',
  templateUrl: './cargo.component.html',
  styleUrls: ['./cargo.component.css']
})
export class CargoComponent implements OnInit {

  cols: any[];

  cargos: Cargo[];

  cargoSelecionado: Cargo;

  botoesDesabilitado: boolean = true;

  constructor(private cargoService: CargoService) { }

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

}
