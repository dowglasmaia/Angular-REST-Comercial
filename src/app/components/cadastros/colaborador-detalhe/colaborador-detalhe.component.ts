import { Component, OnInit } from '@angular/core';
import { Colaborador } from '../../../classes/cadastros/colaborador.dto';
import { ColaboradorService } from './../../../services/cadastros/colaborador.service';
import { ActivatedRoute, Router } from '@angular/router';
import { VariaveisGlobais } from './../../../classes/variaveis-globais';
import { Location } from '@angular/common';
import { Pessoa } from './../../../classes/cadastros/pessoa';
import { PessoaService } from 'src/app/services/cadastros/pessoa.service';

@Component({
  selector: 'app-colaborador-detalhe',
  templateUrl: './colaborador-detalhe.component.html',
  styleUrls: ['./colaborador-detalhe.component.css']
})
export class ColaboradorDetalheComponent implements OnInit {


  colaborador: Colaborador;
  pessoa = new Pessoa();

  filtroPessoa: Pessoa[];

  constructor(
    private colaboradorservice: ColaboradorService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
    private global: VariaveisGlobais,
    private pessoaService: PessoaService
  ) { }

  ngOnInit() {
    this.global.tituloJanela = 'Cadastro e Atualização de colaboradors!';
    if (this.router.url == '/colaborador/novo') {
      this.colaborador = new Colaborador();
      this.colaborador.pessoa = new Pessoa();

    } else {
      /* pegado o paramento na rota ativa */ // usando o parseInt para converter o Number para String
      let id = this.route.snapshot.paramMap.get('id');
      this.colaboradorservice.getColaboradorId(parseInt(id, 0)).subscribe(obj => {
        this.colaborador = obj;
      }, error => {
        this.global.mostraMsg(this.global.error, 'Ocorreu um Error', this.global.trataError(error));
      });
    }
  }

  /* Busca Pessoa - para o autocomplet */
  buscarPessoa(event) {
    this.pessoaService.getListaPessoas(event.query).subscribe(
      obj => {
        this.filtroPessoa = obj;
      }, error => {
        this.global.mostraMsg(this.global.error, 'Ocorreu um Error', this.global.trataError(error));
      });
  }


  //Retornar
  retornar() {
    this.location.back();
  }

  /* salvar */
  salvar() {
    this.colaboradorservice.salvar(this.colaborador).subscribe(obj => {
      this.colaborador = obj;
      this.global.mostraMsg(this.global.success, 'MaiaTI Sistemas: ', 'Registro salvo com Sucesso!');
      this.router.navigate(['/colaboradores']);
    }, error => {
      this.global.mostraMsg(this.global.error, 'Ocorreu um Error', this.global.trataError(error));
    });
  }



}
