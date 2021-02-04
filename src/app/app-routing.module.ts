import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { ProductsDetailComponent } from './products/products-detail/products-detail.component';
import { ProductsListComponent } from './products/products-list/products-list.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'products',canActivate: [AuthGuard],
  component: ProductsListComponent},
  {path: 'product/:id', component: ProductsDetailComponent},
  {path: 'home', component: HomeComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
