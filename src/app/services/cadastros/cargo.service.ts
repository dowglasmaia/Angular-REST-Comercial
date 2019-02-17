import { Cargo } from './../../classes/cadastros/cargo';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CargoService {

  private cargos: Cargo[];

  constructor() {

    this.cargos = [];

    for (let i = 0; i < 15; i++) {

      const cargo: Cargo = new Cargo();
      cargo.id = i;
      cargo.nome = 'nome' + i;
      cargo.descricao = 'Descrição' + i;
      cargo.salario = i * 5;
      cargo.cbo1994 = ' CBO 1994' + i;
      cargo.cbo2002 = ' CBO 2002' + i;

      this.cargos.push(cargo);
    }
  }

  getCargos() {
    return this.cargos;
  }

}
