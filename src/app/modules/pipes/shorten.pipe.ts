import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  transform(value: unknown, limit: unknown): string | unknown {
    if(typeof value === 'string' && typeof limit === 'number') {
      return value.substr(0, limit) + '...';
    } else {
      return value;
    }
  }

}
