import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';


import { Colaborador } from '../../../classes/cadastros/colaborador.dto';
import { VariaveisGlobais } from './../../../classes/variaveis-globais';
import { ColaboradorService } from 'src/app/services/cadastros/colaborador.service';



@Component({
  selector: 'app-colaborador',
  templateUrl: './colaborador.component.html',
  styleUrls: ['./colaborador.component.css']
})
export class ColaboradorComponent implements OnInit {

  cols: any[];

  colaboradores: Colaborador[];

  colaboradorSelecionado: Colaborador;

  botoesDesabilitado: boolean = true;

  constructor(
    private colaboradorService: ColaboradorService,
    private confirmationService: ConfirmationService,
    private global: VariaveisGlobais) { }


  ngOnInit() {
    /* Alterando o Titulo da Pagina Dinamicamente */
    this.global.tituloJanela = 'Listagem de Colaboradores !';

    this.carregaDados();
    

    this.cols = [
      { field: 'id', header: 'Código ' },
      { field: 'pessoa', header: 'Nome' },
      { field: 'cargo', header: 'Cargo' },
      { field: 'setor', header: 'Setor' },
      { field: 'matricula', header: 'Matricula' },
      { field: 'dataAdmissao', header: 'Data de Admissão' }
    ];

  } /* / ngOnInit */



  /* Carrega Dados do Servidor */
  private carregaDados() {
    this.colaboradorService.getColaboradores().subscribe(lista => {
      this.colaboradores = lista;
    }, error => {
      this.global.mostraMsg(this.global.error, 'Ocorreu um Error', this.global.trataError(error));
    });
  }

  /* Eventos ao selecionar uma coluna da tabela */
  onRowSelect(event) {
    this.botoesDesabilitado = false;
  }

  onRowUnselect(event) {
    this.botoesDesabilitado = true;
  }
  /* /fim */

  /* Retorna o cargo selecionado com*/
  getIdcolaborador() {
    return this.colaboradorSelecionado == null ? null : this.colaboradorSelecionado.id;
  }

  /* Excluir com Dialog de Confirmação */
  excluir() {
    this.confirmationService.confirm({
      message: 'Desenja realmente excluir este registro?',
      header: 'Confirmação!',
      icon: 'pi pi-exclamation-triangle',

      accept: () => {
        this.colaboradorService.excluir(this.colaboradorSelecionado.id).subscribe(x => {
          this.carregaDados(); // para Atualizar a Lista Apos a Exclusão
          this.botoesDesabilitado = true; /*Desabilita os Butões au Excluir */

          this.global.mostraMsg(this.global.info, 'Registro exluido com sucesso!', '');
        }, error => {
          this.global.mostraMsg(this.global.error, 'Ocorreu um Error', this.global.trataError(error));
        });

      },
      reject: () => {
        //this.msgs = [{ severity: 'info', summary: 'Cancelado', detail: 'Operação Cancelado com Sucesso!' }];
      }

    });
  }

}
