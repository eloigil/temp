import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'crazy'
})
export class CrazyPipe implements PipeTransform {

  transform(value: any, char: any): any {
    if (!value) {
      return '';
    }
    return value.replace(/[aeiou]/ig, char);
  }

}
