import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductsListComponent } from './products-list-category/products-list-category';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductListItemsComponent } from './product-list-items/product-list-items.component';

@NgModule({
  imports: [
 
    CommonModule,
    ProductsRoutingModule
   
  ],

  declarations: [
    ProductsComponent,
    ProductsListComponent,
    ProductListItemsComponent,
  ]
})
export class ProductsModule { }
