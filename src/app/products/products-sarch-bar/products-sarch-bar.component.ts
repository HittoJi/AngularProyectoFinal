import { Component, OnInit } from '@angular/core';
import { IProducts } from '../i-products';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products-sarch-bar',
  templateUrl: './products-sarch-bar.component.html',
  styleUrls: ['./products-sarch-bar.component.css']
})
export class ProductsSarchBarComponent implements OnInit {

  productos: IProducts[]=[ ]
  tipoProducto:String[]=[];
  searchProduct!: string;
  
  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(      
      productos => {this.productos = productos;//console.log(productos);
        this.tipoProducto=productos.map(p=>p.tipo);
        // console.log(this.tipoProducto);  
      }
    )
  }

}
