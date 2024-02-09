import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../model/product';

@Pipe({
  name: 'pretraga'
})
export class PretragaPipe implements PipeTransform {

  transform(items:any[],text:string) 
  {
    if(!items) return [];
    if(!text) return items;
    text=text.toLowerCase();
    return items.filter
    (
      (p:Product)=>{return (p.title).toLowerCase().includes(text)}
    );
  }

}
