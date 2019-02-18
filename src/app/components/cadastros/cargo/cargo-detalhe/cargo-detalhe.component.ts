import { CargoService } from './../../../../services/cadastros/cargo.service';
import { Cargo } from './../../../../classes/cadastros/cargo';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-cargo-detalhe',
  templateUrl: './cargo-detalhe.component.html',
  styleUrls: ['./cargo-detalhe.component.css']
})
export class CargoDetalheComponent implements OnInit {

  cargo: Cargo;

  constructor(
    private cargoservice: CargoService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    /* pegado o paramento na rota ativa */
    let id = this.route.snapshot.paramMap.get('id');
    this.cargo = this.cargoservice.getCargoId(parseInt(id, 0)); // usando o parseInt para converter o Number para String
  }

  //Retornar
  retornar() {
    this.location.back();
  }

}
