import { CargoService } from './../../../../services/cadastros/cargo.service';
import { Cargo } from './../../../../classes/cadastros/cargo';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { SelectItem } from 'primeng/components/common/api';
import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';



@Component({
  selector: 'app-cargo-detalhe',
  templateUrl: './cargo-detalhe.component.html',
  styleUrls: ['./cargo-detalhe.component.css'],

  providers: [MessageService]
})
export class CargoDetalheComponent implements OnInit {

  cargo: Cargo;

  /* growl do primeNG */
  msgs: Message[] = [];

  constructor(
    private cargoservice: CargoService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    if (this.router.url !== '/cargo/novo') {
      this.rotaAtiva();
    } else {
      this.cargo = new Cargo();
    }

  }

  /* pegado o paramento na rota ativa */
  rotaAtiva() {
    let id = this.route.snapshot.paramMap.get('id');
    this.cargo = this.cargoservice.getCargoId(parseInt(id, 0)); // usando o parseInt para converter o Number para String

  }

  //Retornar
  retornar() {
    this.location.back();
  }

  /* salvar */
  salvar() {
    this.cargoservice.salvar(this.cargo);
    this.msgs.push({ severity: 'success', summary: 'Registro Salvo com Sucesso!'});
                                 /* https://www.primefaces.org/primeng/#/messages*/
  }


}
