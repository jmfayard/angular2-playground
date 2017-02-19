import { Injectable } from '@angular/core';
import {MyNewEnum} from "./my-new-enum.enum";

@Injectable()
export class ParseService {

  type = 'parse';

  launch(command: MyNewEnum, path: string) {
    const name = MyNewEnum[command];
    return `${name} ${path}`;
  }
  constructor() { }

}
