import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Cargo } from './../../classes/cadastros/cargo';
import { urlBaseServidor, httpOptions } from './../../classes/variaveis-globais';


@Injectable({
  providedIn: 'root'
})
export class CargoService {

  private cargos: Cargo[];

  private url = urlBaseServidor + 'cargos/';

  constructor(private http: HttpClient) {

  }

  /* buscar Todos os cargos*/
  getCargos(): Observable<Cargo[]> {
    return this.http.get<Cargo[]>(this.url);

  }

  /*Bascar Cargo por ID */
  getCargoId(id: number): Observable<Cargo> {
    return this.http.get<Cargo>(this.url + id);
  }

  /* Salvar */
  salvar(cargo: Cargo): Observable<Cargo> {
    return this.http.post<Cargo>(this.url, cargo, httpOptions);
  }

  /* Excluir -  Retonar o Objeto Vazio*/
  excluir(id: number): Observable<{}> {
    return this.http.delete(this.url + id)
  }

}
