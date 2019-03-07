import { Cargo } from './../../../../model/classes/cargo';

import { CargoService } from './../../../../services/cadastros/cargo.service';


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { VariaveisGlobais } from 'src/app/model/variaveis-globais';

@Component({
  selector: 'app-cargo-detalhe',
  templateUrl: './cargo-detalhe.component.html',
  styleUrls: ['./cargo-detalhe.component.css'],

  providers: []
})
export class CargoDetalheComponent implements OnInit {

  cargo: Cargo;

  constructor(
    private cargoservice: CargoService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
    private global: VariaveisGlobais
  ) { }

  ngOnInit() {
    this.global.tituloJanela = 'Cadastro e Atualização de Cargos!';
    if (this.router.url == '/cargo/novo') {
      this.cargo = new Cargo();
    } else {
      /* pegado o paramento na rota ativa */ // usando o parseInt para converter o Number para String
      let id = this.route.snapshot.paramMap.get('id');
      this.cargoservice.getCargoId(parseInt(id, 0)).subscribe(obj => {
        this.cargo = obj;
      }, error => {
        this.global.mostraMsg(this.global.error, 'Ocorreu um Error', this.global.trataError(error));
      });
    }
  }

  //Retornar
  retornar() {
    this.location.back();
  }

  /* salvar */
  salvar() {
    this.cargoservice.salvar(this.cargo).subscribe(obj => {
      this.cargo = obj;
      this.global.mostraMsg(this.global.success, 'MaiaTI Sistemas: ', 'Registro salvo com Sucesso!');
      this.router.navigate(['/cargos']);
    }, error => {
      this.global.mostraMsg(this.global.error, 'Ocorreu um Error', this.global.trataError(error));
    });
  }


}
