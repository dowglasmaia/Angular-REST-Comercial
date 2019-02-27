import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Cargo } from './../../classes/cadastros/cargo';

import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CargoService {

  private cargos: Cargo[];

  private url = environment.urlBaseServidor + 'cargos/';

  constructor(
    private http: HttpClient) {

  }

  /* buscar Todos os cargos*/
  getCargos(): Observable<Cargo[]> {
    return this.http.get<Cargo[]>(this.url);

  }

  /* buscar Todos os cargos*/
  getCargosPorNome(nome: string): Observable<Cargo[]> {
    return this.http.get<Cargo[]>(this.url + 'lista/'+ nome);

  }

  /*Bascar Cargo por ID */
  getCargoId(id: number): Observable<Cargo> {
    return this.http.get<Cargo>(this.url + id);
  }

  /* Salvar */
  salvar(cargo: Cargo): Observable<Cargo> {
    return this.http.post<Cargo>(this.url, cargo, environment.httpOptions);

  }

  /* Excluir -  Retonar o Objeto Vazio*/
  excluir(id: number): Observable<{}> {
    return this.http.delete(this.url + id)
  }

}
