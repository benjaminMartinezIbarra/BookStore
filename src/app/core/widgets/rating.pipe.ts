import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rating'
})
export class RatingPipe implements PipeTransform {

  transform(value: number): string {
    return '★★★★★'.substr(0, value) + '☆☆☆☆☆'.substr(0, 5 - value);
  }

}
