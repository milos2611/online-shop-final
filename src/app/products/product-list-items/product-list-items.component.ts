import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductModel } from 'src/app/shared/models/product.model';
import { Subscription } from 'rxjs';
import { CategoryModel } from 'src/app/shared/models/category.model';
import { ProductsService } from '../products.service';
import { ShopCartService } from 'src/app/shop-cart/shop-cart-service';
import { DataStorageService } from 'src/app/shared/services/data-storage-service.service';


@Component({
  selector: 'app-product-list-items',
  templateUrl: './product-list-items.component.html',
  styleUrls: ['./product-list-items.component.css']
})
export class ProductListItemsComponent implements OnInit, OnDestroy {
  categoryName: string;
  subscription: Subscription;
  singleProducts: ProductModel[];



  constructor(private productsService: ProductsService, private route: ActivatedRoute,
    private shop: ShopCartService, private dataStorageService: DataStorageService) { }


  ngOnInit() {
    this.productsService.getCategoryFromServer().then((cat: CategoryModel[]) => {
      this.getProductList();
    }).catch((reason: any) => {
      // error handling here
    });
  }

  getProductList() {




    this.subscription = this.route.params
      .subscribe(
        (params: Params) => {

          this.categoryName = params['category'];
          if (this.categoryName != null) {
            this.singleProducts = this.productsService.getListOfProduct(this.categoryName);
          }
          else {
            this.singleProducts = this.productsService.getAllProduct();
          }

        })
  }


  addToShoppingList(index: number) {
    this.shop.setProductCart(this.singleProducts[index]);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}


