import { Injectable } from '@angular/core';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Message } from 'primeng/api';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class VariaveisGlobais {
  tituloJanela = 'MaiaTi.com - Sistemas';


  constructor(private router: Router) { }

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
    if (error.status === 404) {
      this.router.navigate(['nao-encontrado']);
    }

    if (error.error) {
      return error.error.message;
    } else {
      return 'Error desconhecido!';
    }
  }
}

