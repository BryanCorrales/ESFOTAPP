import { TestBed } from '@angular/core/testing';

import { ReadchatsService } from './readchats.service';

describe('ReadchatsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReadchatsService = TestBed.get(ReadchatsService);
    expect(service).toBeTruthy();
  });
});
