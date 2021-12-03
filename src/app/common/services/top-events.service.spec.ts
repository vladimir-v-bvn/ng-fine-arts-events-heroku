import { TestBed } from '@angular/core/testing';

import { TopEventsService } from './top-events.service';

describe('TopEventsService', () => {
  let service: TopEventsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopEventsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
