import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map,filter} from 'rxjs/operators'
import { IProducts } from './i-products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  productURL = '/assets/productos.json';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<IProducts[]>{   // retorna un observable al que cal subscriure's
    return this.http.get<{productos: IProducts[]}>(this.productURL).pipe( // get retorna un observable i pipe accepta funcions de manipulació de les dades
        map(response => {return response.productos})
      // map(response => {console.log(response);return response.productos}) // de la resposta traguem l'array que ens interessa
    );
  }
  // getProduct(id:number): Observable<IProducts[]>{ 
  // return this.http.get<{productos: IProducts[]}>(this.productURL).pipe( 
  //     map(response => response.productos.filter(p =>p.id == id))
  // );
  
  getProduct(id:number){ 
    return this.http.get<{productos: IProducts[]}>(this.productURL).pipe( 
        map(response => response.productos.filter(p => p.id == id)[0])
    );
  }
}
