import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductsComponent } from "./products.component";
import { ProductListItemsComponent } from "./product-list-items/product-list-items.component";

const productsRoutes: Routes = [
    {
        path: '', component: ProductsComponent, children: [
            { path: '', component: ProductListItemsComponent },
            { path: ':category', component: ProductListItemsComponent }


        ]
    },

]
@NgModule({
    imports: [
        RouterModule.forChild(productsRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class ProductsRoutingModule {}