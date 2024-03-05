import { TestBed } from '@angular/core/testing';

import { MyDateService } from './my-date.service';

describe('MyDateService', () => {
  let service: MyDateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyDateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
