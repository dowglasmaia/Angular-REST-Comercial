import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Pessoa } from 'src/app/classes/cadastros/pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  private url = environment.urlBaseServidor + 'pessoas/';

  constructor(
    private http: HttpClient) {

  }

  /* buscar Todos */
  getPessoas(): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(this.url);

  }

  /* Lista de Pessoas pelo nome*/
  getListaPessoas(nome: string): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(this.url + 'lista/' + nome);

  }

  /*Bascar por ID */
  getPessoaId(id: number): Observable<Pessoa> {
    return this.http.get<Pessoa>(this.url + id);
  }

  /* Salvar */
  salvar(pessoa: Pessoa): Observable<Pessoa> {
    return this.http.post<Pessoa>(this.url, Pessoa, environment.httpOptions);

  }

  /* Excluir -  Retonar o Objeto Vazio*/
  excluir(id: number): Observable<{}> {
    return this.http.delete(this.url + id)
  }
}
