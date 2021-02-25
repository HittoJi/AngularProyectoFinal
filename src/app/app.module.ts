import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { LoginComponent } from './componentes/login/login.component';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { ProductsDetailComponent } from './products/products-detail/products-detail.component';
import { ProductsItemComponent } from './products/products-item/products-item.component';
import { HomeComponent } from './componentes/home/home.component';
import { ProductsService } from './products/products.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsSarchBarComponent } from './products/products-sarch-bar/products-sarch-bar.component';
import { ProductFilterPipe } from './products/product-filter.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu'; 
import {MatButtonModule} from '@angular/material/button';
import { ProductNewComponent } from './products/product-new/product-new.component'; 

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    ProductsListComponent,
    ProductsDetailComponent,
    ProductsItemComponent,
    HomeComponent,
    ProductsSarchBarComponent,
    ProductFilterPipe,
    ProductNewComponent,  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatMenuModule
  ],
  providers: [ProductsService], //Aqui hay que meter los servicios
  bootstrap: [AppComponent]
})
export class AppModule { }
