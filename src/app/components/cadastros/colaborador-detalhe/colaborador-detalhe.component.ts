import { Component, OnInit } from '@angular/core';
import { Colaborador } from '../../../classes/cadastros/colaborador.dto';

@Component({
  selector: 'app-colaborador-detalhe',
  templateUrl: './colaborador-detalhe.component.html',
  styleUrls: ['./colaborador-detalhe.component.css']
})
export class ColaboradorDetalheComponent implements OnInit {


  cargo: Colaborador;

  constructor(
  ) { }

  ngOnInit() {
  }
}