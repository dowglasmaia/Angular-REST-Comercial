import { CompraTipoRequisicao } from './../../model/classes/compra-tipo-requisicao';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompraTipoRequisiacaoService {

  private url = environment.urlBaseServidor + 'tipo/requisicao';

  constructor(
    private http: HttpClient) {

  }

  /* buscar Todos */
  getCompraTipoRequisicaos(): Observable<CompraTipoRequisicao[]> {
    return this.http.get<CompraTipoRequisicao[]>(this.url);

  }

  /* Lista de CompraTipoRequisicao pelo nome*/
  getListaCompraTipoRequisicaos(nome: string): Observable<CompraTipoRequisicao[]> {
    return this.http.get<CompraTipoRequisicao[]>(this.url + 'lista/' + nome);

  }

  /*Bascar por ID */
  getCompraTipoRequisicaoId(id: number): Observable<CompraTipoRequisicao> {
    return this.http.get<CompraTipoRequisicao>(this.url + id);
  }

  /* Salvar */
  salvar(compraTipoRequisicao: CompraTipoRequisicao): Observable<CompraTipoRequisicao> {
    return this.http.post<CompraTipoRequisicao>(this.url, compraTipoRequisicao, environment.httpOptions);

  }

  /* Excluir -  Retonar o Objeto Vazio*/
  excluir(id: number): Observable<{}> {
    return this.http.delete(this.url + id)
  }
}
