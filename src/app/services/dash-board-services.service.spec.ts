import { TestBed } from '@angular/core/testing';

import { DashBoardServicesService } from './dash-board-services.service';

describe('DashBoardServicesService', () => {
  let service: DashBoardServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashBoardServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
