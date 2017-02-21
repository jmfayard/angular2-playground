import { TestBed, inject } from '@angular/core/testing';
import { ProgrammingQuoteService } from './quote.service';

describe('QuoteServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProgrammingQuoteService]
    });
  });

  it('should ...', inject([ProgrammingQuoteService], (service: ProgrammingQuoteService) => {
    expect(service).toBeTruthy();
  }));
});
