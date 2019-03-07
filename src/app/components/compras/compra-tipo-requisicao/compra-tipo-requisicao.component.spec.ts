import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraTipoRequisicaoComponent } from './compra-tipo-requisicao.component';

describe('CompraTipoRequisicaoComponent', () => {
  let component: CompraTipoRequisicaoComponent;
  let fixture: ComponentFixture<CompraTipoRequisicaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompraTipoRequisicaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraTipoRequisicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
