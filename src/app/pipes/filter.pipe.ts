import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string, property: string): any[] {
    if(!items) { return []; }
    if(!searchText) { return items; }

    searchText = searchText.toLowerCase();
    
    if (!property) {
      return items.filter( it => {
        return it.toLowerCase().includes(searchText);
      });
    } else {
      return items.filter(it => {
        return it[property].toLowerCase().includes(searchText);
      })
    }
   }
}