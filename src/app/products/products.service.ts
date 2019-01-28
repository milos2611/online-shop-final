import { Injectable } from '@angular/core';
import { CategoryModel } from '../shared/models/category.model';
import { Subject } from 'rxjs';
import { DataStorageService } from '../shared/services/data-storage-service.service';
import { ProductModel } from '../shared/models/product.model';

@Injectable()
export class ProductsService {
  cateogoryChange = new Subject<CategoryModel[]>();

  private categoryModule: CategoryModel[] = [];

  constructor(private dataStorageService: DataStorageService) { }

  getCategoryFromServer(): Promise<CategoryModel[]> {
    return new Promise((resolve, reject) => {
      this.dataStorageService.getCategory().subscribe(
        (category: CategoryModel[]) => {
          this.categoryModule = category;
         // this.cateogoryChange.next(this.categoryModule.slice());
          resolve(this.categoryModule.slice());
        },
        (error) => reject(error)
      );
    });
  }

  getCategory() {
    return this.categoryModule.slice();
  }



  getProduct(indexProduct: number, indexCategory: string) {
    for (let i = 0; i < this.categoryModule.length; i++) {
      if (this.categoryModule[i].name == indexCategory) {
        return this.categoryModule[i].products[indexProduct]
      }
    }


  }


  getListOfProduct(index: string) {

    for (let i = 0; this.categoryModule.length; i++) {
      if (this.categoryModule[i].name == index) {
        return this.categoryModule[i].products
      }
    }
  }

  getAllProduct() {
    let categorys: ProductModel[] = [];
    for (let i = 0; i < this.categoryModule.length; i++) {
      for (let j = 0; j < this.categoryModule[i].products.length; j++) {
        categorys.push(this.categoryModule[i].products[j])
      }
    }
    return categorys;
  }


}
