import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']
})
export class ProductNewComponent implements OnInit {
  formProduct!:FormGroup;
  
  constructor(private formBuilder:FormBuilder) { }
  
  ngOnInit(): void {
    this.createFormulario();
  }
  createFormulario(){
    this.formProduct=this.formBuilder.group({
      id:['',[Validators.required]],
      name:['',[Validators.required, Validators.minLength(5)]],
      descripcion:['',[Validators.required]],
      precio:['',[Validators.required,Validators.min(10)]],
    });
  }
  get idValid(){
    const contoler= this.formProduct.get('id');
    if (contoler?.touched) {
      return null;
    }else{return contoler?.valid}
  }
  get idName(){
    const contoler= this.formProduct.get('id');
    if (contoler?.touched) {
      return null;
    }else{return contoler?.valid}
  }
}
