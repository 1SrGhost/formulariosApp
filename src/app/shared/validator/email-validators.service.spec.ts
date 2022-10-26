import { TestBed } from '@angular/core/testing';

import { EmailValidatorsService } from './email-validators.service';

describe('EmailValidatorsService', () => {
  let service: EmailValidatorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailValidatorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
