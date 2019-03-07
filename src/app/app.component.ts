import { Component, OnInit } from '@angular/core';


import { LoginService } from './services/login/login.service';
import { VariaveisGlobais } from './model/variaveis-globais';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'comercial-api-cliente';


  constructor(
    private global: VariaveisGlobais,
    private loginService: LoginService) { }

  ngOnInit() {
    this.global.tituloJanela = 'MaiaTi - Sistemas';
  }
}
