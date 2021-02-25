import { Pipe, PipeTransform } from '@angular/core';
import { IProducts } from './i-products';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(products: IProducts[], criteri: string): IProducts[] {
    const c = criteri ? criteri.toLocaleLowerCase() : null;
    products = c ? products.filter(p=> p.tipo.toLocaleLowerCase().includes(c)): products;
    return products;
    // return products.filter(p=>{
    //   return p.tipo===criteri;
    //   console.log(p.tipo);
    //   console.log(criteri);
    // });
  }
}
@Pipe({
  name: 'productSearch'
})
export class ProductFilterPipeSearch implements PipeTransform {
  transform(products: IProducts[], criteri: string): IProducts[] {
    const c = criteri ? criteri.toLocaleLowerCase() : null;
    products = c ? products.filter(p=> p.nombreYDetalles.toLocaleLowerCase().includes(c)): products;
    return products;
  }
}