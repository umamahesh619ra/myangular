import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test'
})
export class TestPipe implements PipeTransform {

  transform(value: string, limit?: number): any {
    if (!value) {
      return null;
      }
      const limtdef = (limit) ? limit : 5;
      return value.substr(0 , limtdef);
  }
}
