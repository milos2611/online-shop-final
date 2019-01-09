import { Component, OnInit } from '@angular/core';
import { DataStorageService } from 'src/app/shared/services/data-storage-service.service';
import { CategoryModel } from 'src/app/shared/models/category.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list-category.html',
  styleUrls: ['./products-list-category.css']
})
export class ProductsListComponent implements OnInit {


  categoryProduc: CategoryModel[];
  
  constructor( private dataStorageService: DataStorageService) { }

  ngOnInit() {

    this.dataStorageService.getCategory().subscribe((category: CategoryModel[]) => {
      this.categoryProduc = category;
    })
  }

}



