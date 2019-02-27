import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';



import { VariaveisGlobais } from './../../../classes/variaveis-globais';
import { ColaboradorService } from './../../../services/cadastros/colaborador.service';
import { Colaborador } from '../../../classes/cadastros/colaborador.dto';
import { Pessoa } from './../../../classes/cadastros/pessoa';
import { PessoaService } from 'src/app/services/cadastros/pessoa.service';
import { SetorService } from 'src/app/services/cadastros/setor.service';
import { TipoColaboradorService } from 'src/app/services/cadastros/tipo-colaborador.service';
import { Setor } from 'src/app/classes/cadastros/setor';
import { CargoService } from 'src/app/services/cadastros/cargo.service';
import { Cargo } from 'src/app/classes/cadastros/cargo';
import { TipoColaborador } from 'src/app/classes/cadastros/tipo-colaborador';
import { environment } from 'src/environments/environment';
import { Usuario } from 'src/app/classes/cadastros/usuario';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-colaborador-detalhe',
  templateUrl: './colaborador-detalhe.component.html',
  styleUrls: ['./colaborador-detalhe.component.css']
})
export class ColaboradorDetalheComponent implements OnInit {

  colaborador: Colaborador;

  pessoa = new Pessoa();

  filtroPessoa: Pessoa[];

  filtroSetor: Setor[];

  filtroCargo: Cargo[];

  filtroTipoColaborador: TipoColaborador[];

  formGroup: FormGroup;

  /* url de envio de foto*/
  urlUpload = environment.urlBaseServidor + 'colaboradores/upload/';

  constructor(
    private colaboradorservice: ColaboradorService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
    private global: VariaveisGlobais,
    private pessoaService: PessoaService,
    private setorService: SetorService,
    private tipoColService: TipoColaboradorService,
    private cargoService: CargoService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {

    /* incluir os Dados do Formulario*/
    this.formGroup = this.fb.group({
      'id': new FormControl(''),
      'pessoa': new FormControl('', Validators.required),
      'setor': new FormControl('', Validators.required),
      'cargo': new FormControl('', Validators.required),
      'tipoColaborador': new FormControl('', Validators.required)

    })

    /* =========== =========== */

    this.global.tituloJanela = 'Cadastro e Atualização de colaboradors!';

    this.colaborador = new Colaborador();

    if (this.router.url !== '/colaborador/novo') {

      /* pegado o paramento na rota ativa */ // usando o parseInt para converter o Number para String
      let id = this.route.snapshot.paramMap.get('id');
      this.colaboradorservice.getColaboradorId(parseInt(id, 0)).subscribe(obj => {
        this.colaborador = obj;

        /* definindo a URL para envio da foto*/
        this.urlUpload = this.urlUpload + this.colaborador.id;

        /* atualizar a foto - ver este processo Depois*/
        /* =============*/

        /* Vinculando o FormGroup com o Objeto Colaborador*/
        this.formGroup.patchValue(this.colaborador);



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

  /* Busca por Setor  */
  buscarPorSetor(event) {
    this.setorService.getSetorsPorNome(event.query).subscribe(
      obj => {
        this.filtroSetor = obj;
      }, error => {
        this.global.mostraMsg(this.global.error, 'Ocorreu um Error', this.global.trataError(error));
      });
  }

  /* Busca por Cargo  */
  buscarPorCargo(event) {
    this.cargoService.getCargosPorNome(event.query).subscribe(
      obj => {
        this.filtroCargo = obj;
      }, error => {
        this.global.mostraMsg(this.global.error, 'Ocorreu um Error', this.global.trataError(error));
      });
  }

  /* Busca por Tipo de Colaborador  */
  buscarPorTipoColaborador(event) {
    this.tipoColService.getTipoColaboradoresPorNome(event.query).subscribe(
      obj => {
        this.filtroTipoColaborador = obj;
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
      this.router.navigate(['/colaborador']);
    }, error => {
      this.global.mostraMsg(this.global.error, 'Ocorreu um Error', this.global.trataError(error));
    });
  }

  /*
    errorUpload(event) {
      const msg = (event.error).message;
      this.global.mostraMsg(this.global.error, 'Ocorreu um Error', msg);
      console.log(event.error);
    }
  
    onBeforeSend(event) {
      let usuario: Usuario = JSON.parse(localStorage.getItem('usuarioSessao'));
      event.xhr.setRequestHeader('Authorization', usuario.token);
    }
  
    onUpload(event) {
      this.global.mostraMsg(this.global.success, 'MaiaTI Sistemas: ', 'Upload realizado com Sucesso!');
    }
    */

/* Fazendo a Submissão dos Dados do Formulario*/
  onSubmit(value) {
    this.colaborador = value as Colaborador;
    this.salvar();
  }
}
