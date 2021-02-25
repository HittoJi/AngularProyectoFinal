import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProducts } from '../i-products';

@Component({
  selector: 'app-products-item',
  templateUrl: './products-item.component.html',
  styleUrls: ['./products-item.component.css']
})
export class ProductsItemComponent implements OnInit {
  @Output() rattingChanged = new EventEmitter<number>();
  @Input() product!: IProducts;

  image = '';

  constructor() { }

  auxRatting!: number;

  ngOnInit(): void {
    this.auxRatting = this.product.ratting;
  }
  puntuar(i: number): void {
    this.rattingChanged.emit(this.auxRatting);
  }
}
