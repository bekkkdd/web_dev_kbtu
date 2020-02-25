import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CategoriesComponent} from './categories/categories.component';
import {CategoryDetailComponent} from './category-detail/category-detail.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';


const routes: Routes = [
  { path: '', redirectTo: '/categories', pathMatch: 'full' },
  { path: 'categories', component: CategoriesComponent },
  { path: 'categories/:categoryId/products', component: CategoryDetailComponent },
  { path: 'categories/:categoryId/products/:productId', component: ProductDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
