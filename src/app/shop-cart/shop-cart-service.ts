
import { Injectable } from '@angular/core';
import { ProductModel } from '../shared/models/product.model';
import { Subject } from 'rxjs';

@Injectable()
export class ShopCartService {
    shopCartChanged = new Subject<ProductModel[]>();
    private productCart: ProductModel[] = []


    constructor() { }



    getProduct() {
        return this.productCart.slice()
    }

    deleteProduct(index: number) {
        this.productCart.splice(index, 1)
        this.shopCartChanged.next(this.productCart.slice())
    }

    
    setProductCart(product: ProductModel) {
        for (let i = 0; i < this.productCart.length; i++) {
            if (product.name == this.productCart[i].name ) {
                
                  this.productCart[i].numberOfProduct += product.numberOfProduct ;
                  return;
                

            }
        }
        this.productCart.push(product);
        this.shopCartChanged.next(this.productCart);


    }
    

}