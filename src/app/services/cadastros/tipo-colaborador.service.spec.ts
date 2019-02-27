import { TestBed } from '@angular/core/testing';

import { TipoColaboradorService } from './tipo-colaborador.service';

describe('TipoColaboradorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TipoColaboradorService = TestBed.get(TipoColaboradorService);
    expect(service).toBeTruthy();
  });
});
