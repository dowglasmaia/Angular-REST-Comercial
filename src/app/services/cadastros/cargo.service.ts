import { Cargo } from './../../classes/cadastros/cargo';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CargoService {

  private cargos: Cargo[];

  constructor() {

    this.cargos = [];

    for (let i = 0; i < 16; i++) {
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

  /*Bascar Cargo por ID */
  getCargoId(id: number) {
    for (let i = 0; i < this.cargos.length; i++) {
      if (id === this.cargos[i].id) {
        return this.cargos[i];
      }
    }
    return null;
  }

  /* Salvar */
  salvar(cargo: Cargo) {
    /*  implementação de Test - sera trocada peça requisição da API do Servidor */
    if (cargo.id == null) {
      cargo.id = this.cargos.length + 1;
      this.cargos.push(cargo);

    } else {
      let indice = -1;
      for (let i = 0; i < this.cargos.length; i++) {
        if (cargo.id == this.cargos[i].id) {
          indice = i;
          break;
        }
      }
      this.cargos[indice] = cargo;
    }
  } /*  /salvar*/

  excluir(cargo: Cargo) {
    /* Test - sera substituido pelo da API Rest do Back-End */
    let indice = -1;
    for (let i = 0; i < this.cargos.length; i++) {
      if (cargo.id == this.cargos[i].id) {
        indice = i;
        break;
      }
    }
    this.cargos.splice(indice, 1); // Exlcuir um Resgistro
  }
}
