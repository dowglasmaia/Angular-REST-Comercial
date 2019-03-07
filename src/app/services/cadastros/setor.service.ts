import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Setor } from 'src/app/model/classes/setor';

@Injectable({
  providedIn: 'root'
})
export class SetorService {  

  private setors: Setor[];

  private url = environment.urlBaseServidor + 'setores/';

  constructor(
        private http: HttpClient) {

  }

  /* buscar Todos os Setors*/
  getSetors(): Observable<Setor[]> {
    return this.http.get<Setor[]>(this.url);

  }

  /* buscar Todos os Setors*/
  getSetorsPorNome(nome: string): Observable<Setor[]> {
    return this.http.get<Setor[]>(this.url + 'lista/'+ nome);

  }

  /*Bascar Setor por ID */
  getSetorId(id: number): Observable<Setor> {
    return this.http.get<Setor>(this.url + id);
  }

  /* Salvar */
  salvar(Setor: Setor): Observable<Setor> {
    return this.http.post<Setor>(this.url, Setor, environment.httpOptions);

  }

  /* Excluir -  Retonar o Objeto Vazio*/
  excluir(id: number): Observable<{}> {
    return this.http.delete(this.url + id)
  }
}
