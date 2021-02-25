import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProducts } from '../i-products';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.css']
})
export class ProductsDetailComponent implements OnInit {
  product!:IProducts;
  
  constructor(private activatedRoute: ActivatedRoute, private productsService : ProductsService) { }

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe(p=>this.product=p)
    // this.productsService.getProduct(p.id).subscribe(product => this.product = product)                                                                                                                                                                                          
    this.activatedRoute.params.subscribe(p=>{
      this.productsService.getProduct(p.id).subscribe(product=>this.product=product);
    })
  }

}
