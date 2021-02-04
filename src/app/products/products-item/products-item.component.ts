import { Component, Input, OnInit } from '@angular/core';
import { IProducts } from '../i-products';

@Component({
  selector: 'app-products-item',
  templateUrl: './products-item.component.html',
  styleUrls: ['./products-item.component.css']
})
export class ProductsItemComponent implements OnInit {
  @Input() product!: IProducts;
  image = '';
  constructor() { }

  ngOnInit(): void {
  }

}
