import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false // pipe recalculates when data changes
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterColor: string, propName: string): any {
    if(value.length === 0 || filterColor==='') {
      return value;
    }
    let resultArr = [];
    for(let item of value) {
      if(item[propName] === filterColor) {
        resultArr.push(item);
      }
    }
    return resultArr;
  }

}
