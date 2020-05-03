import { TestBed } from '@angular/core/testing';

import { InfoWeatherService } from './info-weather.service';

describe('InfoWeatherService', () => {
  let service: InfoWeatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoWeatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
