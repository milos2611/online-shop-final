import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CategoryModel } from 'src/app/shared/models/category.model';
import { BsModalRef } from 'ngx-bootstrap';
import { DataStorageService } from 'src/app/shared/services/data-storage-service.service';
import { ProductModel } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductModal implements OnInit {


 
  categoryList: CategoryModel[] = [];
  product = <ProductModel>{};
  productForm: FormGroup;
  editMode = false;
  data: CategoryModel;
  indexProduct: number;





  constructor(
    public modalRef: BsModalRef, private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.initForm();
  }


  storeProduct() {

    for (let i = 0; i < this.categoryList.length; i++) {

      if (this.categoryList[i].name == this.productForm.value.category) {
        this.product.name = this.productForm.value.name;
        this.product.image = this.productForm.value.image;
        this.product.description = this.productForm.value.description;
        this.product.price = this.productForm.value.price;

        this.categoryList[i].products.push(this.product);
        this.dataStorageService.storeProduct(this.categoryList[i]).subscribe((product) => {


        });
      }

    }
    this.productForm.reset();

  }

  editCategory() {

    this.data.products[this.indexProduct].name = this.productForm.value.name;
    this.data.products[this.indexProduct].description = this.productForm.value.description;
    this.data.products[this.indexProduct].image = this.productForm.value.image;
    console.log(this.productForm.value.price)
    this.data.products[this.indexProduct].price = this.productForm.value.price;


    this.dataStorageService.editCategory(this.data).subscribe((category => {

    }))
  }

  private initForm() {

    let name = '';
    let description = '';
    let image = '';
    let price :number;

    if (this.editMode) {

      name = this.data.products[this.indexProduct].name;
      description = this.data.products[this.indexProduct].description;
      image = this.data.products[this.indexProduct].image;
      console.log(this.data.products[this.indexProduct].price)

      price = this.data.products[this.indexProduct].price;

    }

    this.productForm = new FormGroup({
      'category': new FormControl(name, Validators.required),
      'name': new FormControl(name, Validators.required),
      'description': new FormControl(description, Validators.required),
      'image': new FormControl(image, Validators.required),
      'price': new FormControl(price, Validators.required)

    })
  }

}
