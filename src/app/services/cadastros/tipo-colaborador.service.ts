import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { TipoColaborador } from 'src/app/classes/cadastros/tipo-colaborador';

@Injectable({
  providedIn: 'root'
})
export class TipoColaboradorService {

  private tipoColaborador: TipoColaborador[];

  private url = environment.urlBaseServidor + 'tipo-colaboradores/';

  constructor(
    private http: HttpClient) {

  }

  /* buscar Todos os TipoColaboradors*/
  getTipoColaboradores(): Observable<TipoColaborador[]> {
    return this.http.get<TipoColaborador[]>(this.url);

  }

  /* buscar Todos os TipoColaboradors*/
  getTipoColaboradoresPorNome(nome: string): Observable<TipoColaborador[]> {
    return this.http.get<TipoColaborador[]>(this.url + 'lista/' + nome);

  }

  /*Bascar TipoColaborador por ID */
  getTipoColaboradorId(id: number): Observable<TipoColaborador> {
    return this.http.get<TipoColaborador>(this.url + id);
  }

  /* Salvar */
  salvar(TipoColaborador: TipoColaborador): Observable<TipoColaborador> {
    return this.http.post<TipoColaborador>(this.url, TipoColaborador, environment.httpOptions);

  }

  /* Excluir -  Retonar o Objeto Vazio*/
  excluir(id: number): Observable<{}> {
    return this.http.delete(this.url + id)
  }

  
}
