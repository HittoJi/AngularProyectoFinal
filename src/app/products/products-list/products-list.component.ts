import { Component, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs/operators';
import { IProducts } from '../i-products';
import { ProductsService } from '../products.service';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  
  productos: IProducts[]=[
    // {nombreYDetalles:"Nombre del producto y algun otro dato",precio:"900.95",img:"../../../assets/logo-1.png"},
    // {nombreYDetalles:"Nombre del producto y algun otro dato",precio:"800.95",img:"../../../assets/logo-2.png"}
  ]
  searchProduct!: string;
  constructor(private productsService: ProductsService) {}
  
  ngOnInit(): void {
    this.productsService.getProducts().subscribe(      
      productos => {this.productos = productos;//console.log(productos);
      }
    )
  }
}
