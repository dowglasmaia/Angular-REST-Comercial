import { Component, OnInit } from '@angular/core';

import { VariaveisGlobais } from './classes/variaveis-globais';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'comercial-api-cliente';


  constructor(private global: VariaveisGlobais) { }

  ngOnInit() {
    this.global.tituloJanela = 'MaiaTi - Sistemas';
  }
}
