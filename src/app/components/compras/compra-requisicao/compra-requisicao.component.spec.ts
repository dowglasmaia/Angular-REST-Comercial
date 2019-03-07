import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraRequisicaoComponent } from './compra-requisicao.component';

describe('CompraRequisicaoComponent', () => {
  let component: CompraRequisicaoComponent;
  let fixture: ComponentFixture<CompraRequisicaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompraRequisicaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraRequisicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
