import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Colaborador } from '../../classes/cadastros/colaborador.dto';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ColaboradorService {

  private colaboradores: Colaborador[];

  private url = environment.urlBaseServidor + 'colaboradores';

  constructor(
    private http: HttpClient) {

  }

  /* buscar Todos */
  getColaboradores(): Observable<Colaborador[]> {
    return this.http.get<Colaborador[]>(this.url);

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