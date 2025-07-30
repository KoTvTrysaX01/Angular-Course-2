import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  private DatePipe = new DatePipe('en-Us')

  transform(value: any, ...args: any[]): any {
    // if(value == '' || value == null || value == undefined){
    //   return 'NA'
    // }else{
    //   return value ? '+34' + value : value;
    // }
    return this.DatePipe.transform(value, 'MMM/YYYY')
  }

}
