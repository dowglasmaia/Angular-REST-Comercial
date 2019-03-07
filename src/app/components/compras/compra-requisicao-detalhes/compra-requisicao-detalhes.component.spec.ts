import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraRequisicaoDetalhesComponent } from './compra-requisicao-detalhes.component';

describe('CompraRequisicaoDetalhesComponent', () => {
  let component: CompraRequisicaoDetalhesComponent;
  let fixture: ComponentFixture<CompraRequisicaoDetalhesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompraRequisicaoDetalhesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraRequisicaoDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
