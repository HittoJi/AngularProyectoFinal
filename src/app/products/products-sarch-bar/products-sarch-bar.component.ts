import { Component, OnInit } from '@angular/core';
import { IProducts } from '../i-products';
import { ProductsService } from '../products.service';
import { SarchBarService } from '../sarch-bar.service';

@Component({
  selector: 'app-products-sarch-bar',
  templateUrl: './products-sarch-bar.component.html',
  styleUrls: ['./products-sarch-bar.component.css']
})
export class ProductsSarchBarComponent implements OnInit {

  productos: IProducts[]=[ ]
  tipoProducto:String[]=[];
  catalogo: string = '';
  criteri: string= "";
  
  constructor(private productsService: ProductsService,private busqueda: SarchBarService) {}

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(      
      productos => {this.productos = productos;//console.log(productos);
        this.tipoProducto=productos.map(p=>p.tipo);
        // console.log(this.tipoProducto);  
      }
    )
  }
  canviarCriteri(){
    // console.log(this.criteri);
    
    this.busqueda.setCriteri(this.criteri);
  }
  
  onItemClick(index: number){
    let tipo =""
    if (index != -1) {
      tipo = `${this.productos[index].tipo}`;
      
    }
    this.busqueda.setCatalogo(tipo);
  }
}
