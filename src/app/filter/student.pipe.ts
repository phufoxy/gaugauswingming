import { Pipe, PipeTransform } from '@angular/core';
import { Trainer } from '../model/trainer';

@Pipe({
  name: 'student',
  pure: false
})
export class StudentPipe implements PipeTransform {

  transform(items: Trainer[], filter: Trainer): Trainer[] {
    if (!items || !filter) {
      return items;
    }
    // filter items array, items which match and return true will be kept, false will be filtered out
    return items.filter((item: Trainer) => this.applyFilter(item, filter));
  }
/**
   * Perform the filtering.
   * 
   * @param {Trainer} Trainer The book to compare to the filter.
   * @param {Trainer} filter The filter to apply.
   * @return {boolean} True if book satisfies filters, false if not.
   */
  applyFilter(products: Trainer, filter: Trainer): boolean {
    for (let field in filter) {
      if (filter[field]) {
        if (typeof filter[field] === 'string') {
          if (products[field].toLowerCase().indexOf(filter[field].toLowerCase()) === -1) {
            return false;
          }
        } else if (typeof filter[field] === 'number') {
          if (products[field] !== filter[field]) {
            return false;
          }
        }
      }
    }
    return true;
  }
}
