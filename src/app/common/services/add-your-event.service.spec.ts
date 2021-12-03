import { TestBed } from '@angular/core/testing';

import { AddYourEventService } from './add-your-event.service';

describe('AddYourEventService', () => {
  let service: AddYourEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddYourEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
