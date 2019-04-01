import { Colaborador } from './../../model/classes/colaborador';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ColaboradorService {

  private colaboradores: Colaborador[];

  private url = environment.urlBaseServidor + 'colaboradores/';

  constructor(
    private http: HttpClient) {

  }

  /* buscar Todos */
  getColaboradores(): Observable<Colaborador[]> {
    return this.http.get<Colaborador[]>(this.url);

  }

   /* buscar Todos Por Nome */
   getColaboradorPorNome(nome: string): Observable<Colaborador[]> {
    return this.http.get<Colaborador[]>(`${environment.urlBaseServidor}colaboradores/lista?nome=${nome}`);

  }


  /*Bascar por ID */
  getColaboradorId(id: number): Observable<Colaborador> {
    return this.http.get<Colaborador>(this.url + id);
  }

  /* Salvar */
  salvar(colaborador: Colaborador): Observable<Colaborador> {
    return this.http.post<Colaborador>(this.url, colaborador, environment.httpOptions);

  }

  /* Excluir -  Retonar o Objeto Vazio*/
  excluir(id: number): Observable<{}> {
    return this.http.delete(this.url + id)
  }


}
