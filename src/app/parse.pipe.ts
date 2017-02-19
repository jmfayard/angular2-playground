import { Pipe, PipeTransform } from '@angular/core';
import {ParseUser} from "./parse-user";

@Pipe({
  name: 'parse'
})
export class ParsePipe implements PipeTransform {

  transform(value: ParseUser, args?: any): any {
    return value.get('objectId');
  }

}
