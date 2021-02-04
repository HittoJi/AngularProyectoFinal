import { Pipe, PipeTransform } from '@angular/core';
import { IProducts } from './i-products';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(products: IProducts[], filterBy: string): IProducts[] {
    const filter = filterBy ? filterBy.toLocaleLowerCase() : null; // passem el filtre a minúscules o a null si no està
    return filter ?  // Si no és null filtra
    products.filter(p => p.nombreYDetalles.toLocaleLowerCase().includes(filter))
    : products; // si és null trau l'array sense filtre
    // return products.filter(p=>p.tipo === criterio)
  }
}
