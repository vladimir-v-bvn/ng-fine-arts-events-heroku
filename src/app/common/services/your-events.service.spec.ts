import { TestBed } from '@angular/core/testing';

import { YourEventsService } from './your-events.service';

describe('YourEventsService', () => {
  let service: YourEventsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YourEventsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
