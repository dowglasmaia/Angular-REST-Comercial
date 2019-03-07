import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppComponent } from './app.component';

/* Modulos de Componentes do Sistema*/
import { CargoComponent } from './components/cadastros/cargo/cargo.component';
import { CargoDetalheComponent } from './components/cadastros/cargo/cargo-detalhe/cargo-detalhe.component';
import { JwtInterceptor } from './interceptor/jwt-interceptor';
import { NaoEncontradoComponent } from './components/nao-encontrado/nao-encontrado.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ColaboradorComponent } from './components/cadastros/colaborador/colaborador.component';
import { ColaboradorDetalheComponent } from './components/cadastros/colaborador-detalhe/colaborador-detalhe.component';


/* imports dos Modulos do PrimeNG - https://www.primefaces.org/primeng */
import { ToolbarModule } from 'primeng/toolbar';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { PasswordModule } from 'primeng/password';
import {PanelModule} from 'primeng/panel';
import {SplitButtonModule} from 'primeng/splitbutton';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {FileUploadModule} from 'primeng/fileupload';
import {GrowlModule} from 'primeng/growl';
import { CompraRequisicaoComponent } from './components/compras/compra-requisicao/compra-requisicao.component';
import { CompraTipoRequisicaoComponent } from './components/compras/compra-tipo-requisicao/compra-tipo-requisicao.component';
import { CompraRequisicaoDetalhesComponent } from './components/compras/compra-requisicao-detalhes/compra-requisicao-detalhes.component';
import { CompraTipoRequisicaoDetalheComponent } from './components/compras/compra-tipo-requisicao-detalhe/compra-tipo-requisicao-detalhe.component';






@NgModule({
  declarations: [
    AppComponent,
    CargoComponent,
    CargoDetalheComponent,
    NaoEncontradoComponent,
    HomeComponent,
    LoginComponent,
    ColaboradorComponent,
    ColaboradorDetalheComponent,
    CompraRequisicaoComponent,
    CompraTipoRequisicaoComponent,
    CompraRequisicaoDetalhesComponent,
    CompraTipoRequisicaoDetalheComponent
  ],

  /* Declara os Imports no imports: []*/
  imports: [
    BrowserModule,
    ToolbarModule,
    AccordionModule,
    BrowserAnimationsModule,
    TableModule,
    ButtonModule,
    AppRoutingModule,
    InputTextModule,
    InputTextareaModule,
    FormsModule, // nesserario para usar o formalario
    ReactiveFormsModule,
    MessagesModule,
    MessageModule,
    ConfirmDialogModule,
    HttpClientModule, //modulo para fazer requisições http ao servidor   
    PasswordModule,
    PanelModule,
    SplitButtonModule,
    AutoCompleteModule,
    FileUploadModule, // para fazer envio de arquivo para  servidor, no caso aqui, Fotos
    GrowlModule
  ],

  providers: [ConfirmationService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true } /*declarando o privide do HTTP_INTERCEPETOR para a Class jwtInterceptor*/
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
