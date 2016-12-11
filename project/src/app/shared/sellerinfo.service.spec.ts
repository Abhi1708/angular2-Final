/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SellerinfoService } from './sellerinfo.service';

describe('SellerinfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SellerinfoService]
    });
  });

  it('should ...', inject([SellerinfoService], (service: SellerinfoService) => {
    expect(service).toBeTruthy();
  }));
});
