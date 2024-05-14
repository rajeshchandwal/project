import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString : string, filterProperty : string): any {
   if(value.length==0 || filterString=='')
  return value;
  else
  {
    let newValue = [];
    for(let val of value) {
      if(val[filterProperty]==filterString)
      newValue.push(val);

    }
    return newValue;
  }

}
}
