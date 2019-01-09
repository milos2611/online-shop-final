
import { Injectable } from '@angular/core';
import { ProductModel } from '../shared/models/product.model';
import { Subject } from 'rxjs';

@Injectable()
export class ShopCartService {
    shopCartChanged = new Subject<ProductModel[]>();

    constructor() {}
    private productCart: ProductModel[] = []



    getProduct() {
        return this.productCart.slice()
    }

    deleteProduct(index: number) {
        this.productCart.splice(index, 1)
        this.shopCartChanged.next(this.productCart.slice())
    }

    setProductCart(product: ProductModel) {
        for (let i = 0; i < this.productCart.length; i++) {
            if (product.id == this.productCart[i].id && product.numberOfProduct >= 1) {
                
                  this.productCart[i].numberOfProduct = product.numberOfProduct + this.productCart[i].numberOfProduct;
                  return;
                

            }
        }
        this.productCart.push(product);
        this.shopCartChanged.next(this.productCart);

    }

}