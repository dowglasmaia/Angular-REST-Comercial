import { TestBed } from '@angular/core/testing';

import { CompraTipoRequisiacaoService } from './compra-tipo-requisiacao.service';

describe('CompraTipoRequisiacaoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompraTipoRequisiacaoService = TestBed.get(CompraTipoRequisiacaoService);
    expect(service).toBeTruthy();
  });
});
