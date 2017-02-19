import {Injectable} from '@angular/core';
import * as _ from 'lodash';


@Injectable()
export class LoService {

  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  size() {
    return _.size(this.numbers);
  }

  constructor() {
  }

}
