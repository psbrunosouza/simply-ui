import { TestBed } from '@angular/core/testing';

import { SimplyUiService } from './simply-ui.service';

describe('SimplyUiService', () => {
  let service: SimplyUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimplyUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
