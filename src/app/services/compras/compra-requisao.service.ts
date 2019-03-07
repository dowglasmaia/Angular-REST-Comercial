import { CompraRequisicao } from './../../model/classes/compra-requisicao';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CompraRequisaoService {

  /* URL do Servidor da Aplicalçao*/
  private url = environment.urlBaseServidor + 'compra/requisicao';

  constructor(
    private http: HttpClient) {

  }

  /* buscar Todos */
  getCompraRequisicoes(): Observable<CompraRequisicao[]> {
    return this.http.get<CompraRequisicao[]>(this.url);

  }

  /* Lista de CompraRequisicao pelo nome*/
  getListaCompraRequisicoes(nome: string): Observable<CompraRequisicao[]> {
    return this.http.get<CompraRequisicao[]>(this.url + 'lista/' + nome);

  }

  /*Bascar por ID */
  getCompraRequisicaoId(id: number): Observable<CompraRequisicao> {
    return this.http.get<CompraRequisicao>(this.url + id);
  }

  /* Salvar */
  salvar(compraRequisicao: CompraRequisicao): Observable<CompraRequisicao> {
    return this.http.post<CompraRequisicao>(this.url, compraRequisicao, environment.httpOptions);

  }

  /* Excluir -  Retonar o Objeto Vazio*/
  excluir(id: number): Observable<{}> {
    return this.http.delete(this.url + id)
  }
}
