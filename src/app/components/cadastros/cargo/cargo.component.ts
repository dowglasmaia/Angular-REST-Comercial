import { Cargo } from './../../../classes/cadastros/cargo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cargo',
  templateUrl: './cargo.component.html',
  styleUrls: ['./cargo.component.css']
})
export class CargoComponent implements OnInit {

  cols: any[];

  cargos: Cargo[];

  constructor() { }

  ngOnInit() {
    this.cargos = [];
    this.cols = [
      { field: 'id', header: 'Código ' },
      { field: 'nome', header: 'Nome' },
      { field: 'descricao', header: 'Descriçao' },
      { field: 'salario', header: 'Salário' },
      { field: 'cbo1994', header: 'CBO 1994' },
      { field: 'cbo2002', header: 'CBD 2002' }
    ];

  }

}
