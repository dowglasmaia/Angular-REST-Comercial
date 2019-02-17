import { Cargo } from './../../../../classes/cadastros/cargo';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cargo-detalhe',
  templateUrl: './cargo-detalhe.component.html',
  styleUrls: ['./cargo-detalhe.component.css']
})
export class CargoDetalheComponent implements OnInit {

  cargo: Cargo;

  constructor() { }

  ngOnInit() {
    this.cargo = new  Cargo();
  }

}
