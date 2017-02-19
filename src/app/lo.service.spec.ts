import { TestBed, inject } from '@angular/core/testing';
import { LoService } from './lo.service';

describe('LoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoService]
    });
  });

  it('should be able to call _.size()', inject([LoService], (service: LoService) => {
    service.numbers = [1, 2, 3];
    expect(service.size()).toBe(3);
  }));
});
