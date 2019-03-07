import { TestBed } from '@angular/core/testing';

import { CompraRequisaoService } from './compra-requisao.service';

describe('CompraRequisaoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompraRequisaoService = TestBed.get(CompraRequisaoService);
    expect(service).toBeTruthy();
  });
});
