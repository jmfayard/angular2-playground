import { TestBed, inject } from '@angular/core/testing';
import { ParseService } from './parse.service';
import {MyNewEnum} from "./my-new-enum.enum";

describe('ParseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParseService]
    });
  });

  it('should be abke to use parse.', inject([ParseService], (service: ParseService) => {
    expect(service.type).toBeTruthy();

    const result = service.launch(MyNewEnum.GET, "get");
    expect(result).toBe(`GET get`);
  }));

});
