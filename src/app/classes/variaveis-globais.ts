import { Injectable } from '@angular/core';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Message } from 'primeng/api';

/* url do servidor*/
export const urlBaseServidor = 'http://localhost:8080/';

/* headers - Definindo o Tipo de Conteudo que é Passo no corpo da requisição*/
export const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};



@Injectable({
  providedIn: 'root'
})
export class VariaveisGlobais {
  tituloJanela = 'MaiaTi.com - Sistemas';

  /* Messagem do primeNG */
  msgs: Message[] = [];

  /* Tipo de Errors  - https://www.primefaces.org/primeng/#/messages */
  success = 'success';
  info = 'info';
  warn = 'warn';
  error = 'error';

  mostraMsg(tipo: string, titulo: string, menssage: string) {
    this.msgs = [{ severity: tipo, summary: titulo, detail: menssage }];
  }

  /* Tratando Error - Retornados pelo Servidor */
  trataError(error: HttpErrorResponse): string {
    if (error.error) {
      return error.error.message;
    } else {
      return 'Error desconhecido!';
    }
  }
}

