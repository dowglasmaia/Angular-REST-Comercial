
import { Component, OnInit } from '@angular/core';
import { VariaveisGlobais } from 'src/app/model/variaveis-globais';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private global: VariaveisGlobais) { }

  ngOnInit() {
    this.global.tituloJanela = 'MaiaTi - Sistemas';
  }

}
