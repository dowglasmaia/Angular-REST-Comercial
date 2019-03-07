import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraTipoRequisicaoDetalheComponent } from './compra-tipo-requisicao-detalhe.component';

describe('CompraTipoRequisicaoDetalheComponent', () => {
  let component: CompraTipoRequisicaoDetalheComponent;
  let fixture: ComponentFixture<CompraTipoRequisicaoDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompraTipoRequisicaoDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraTipoRequisicaoDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
