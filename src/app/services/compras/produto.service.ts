import { environment } from './../../../environments/environment.prod';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Produto } from './../../model/classes/produto';


@Injectable({
  providedIn: 'root'
})
export class ProdutoService {


  private produtos: Produto[];

  private url = environment.urlBaseServidor + 'produtos/';

  constructor(
    private http: HttpClient) {

  }

  /* buscar Todos*/
  getProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.url);

  }

  /* buscar por nome*/
  getProdutosPorNome(nome: string): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.url + 'lista/'+ nome);

  }

  /*Bascar Produto por ID */
  getProdutoId(id: number): Observable<Produto> {
    return this.http.get<Produto>(this.url + id);
  }

  /* Salvar */
  salvar(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.url, produto, environment.httpOptions);

  }

  /* Excluir -  Retonar o Objeto Vazio*/
  excluir(id: number): Observable<{}> {
    return this.http.delete(this.url + id)
  }

}