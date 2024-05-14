import { Component, PipeTransform, Pipe } from '@angular/core';

@Pipe({
name : 'shortStr'
})
export class ShortStrPipe  implements PipeTransform{
    transform(value:any):any{
return value.substr(0,50)+ '....';
    }

}