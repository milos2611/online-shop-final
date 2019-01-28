import { Component, OnInit, TemplateRef, ViewChild, ElementRef, Inject, forwardRef } from '@angular/core';
import { DataStorageService } from '../shared/services/data-storage-service.service';
import { CategoryModel } from '../shared/models/category.model';
import {  BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ProductModel } from '../shared/models/product.model';
import { AdminSerivice } from './admin.service';
import { Subscription } from 'rxjs';
import { AlertComponent } from 'ngx-bootstrap/alert/alert.component';
import { MessageService } from '../shared/services/message-data.service';
import { CategoryComponent } from './category/category.component';
import { ProductModal } from './products/products.component';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {



  subscription: Subscription;
  categoryList: CategoryModel[] = [];
  modalRef: BsModalRef;
  productArray: ProductModel[] = [];
  alerts: any[] = [];


  constructor(private dataStorageService: DataStorageService, private modalService: BsModalService,
    private admin: AdminSerivice, private messageService: MessageService) { }





  ngOnInit() {
    this.admin.getCategoryFromServer();
    this.subscription = this.admin.cateogoryChanged.subscribe(
      (category: CategoryModel[]) => {
        this.categoryList = category;
      }
    );

    this.messageService.messageChanged.subscribe((message) => {
      this.alerts.push(
        {
          type: 'success',
          msg: message,
          timeout: 5000
        }
      )
    })
  }


  onClosed(dismissedAlert: AlertComponent): void {
    this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
  }


  openModalCategory(cateogry: CategoryModel, editMode: boolean) {
    this.modalRef = this.modalService.show(CategoryComponent, {
      initialState: {
        title: 'Category',
        data: cateogry,
        editMode: editMode

      }
    });
  }

  openModalProduct(cateogry: CategoryModel, editMode: boolean, indexProduct: number) {
    this.modalRef = this.modalService.show(ProductModal, {
      initialState: {
        title: 'Product',
        data: cateogry,
        editMode: editMode,
        indexProduct: indexProduct,
        categoryList: this.categoryList
      }
    });
  }


  deteleProduct(indexCategory: number, indexProduct: number, category: CategoryModel) {
    this.categoryList[indexCategory].products.splice(indexProduct, 1);
    this.dataStorageService.deleteProduct(category, indexProduct).subscribe();

  }

  deteleCategory(indexProduct: number, category: CategoryModel) {
    this.categoryList.splice(indexProduct, 1);

    this.dataStorageService.deleteCategory(category).subscribe();

  }



}
