import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { Category } from 'src/app/model/category.model';
import { Product } from 'src/app/model/product.model';
import { CategoryService } from 'src/app/service/category.service';
interface expandedRows {
  [key: string]: boolean;
}

@Component({
  selector: 'app-category-manager',
  templateUrl: './category-manager.component.html',
  styleUrls: ['./category-manager.component.scss'],
  providers: [MessageService, ConfirmationService],

})
export class CategoryManagerComponent implements OnInit {
  @ViewChild('dt') dt!: Table;
  @ViewChild('dt2') dt2!: Table;
  isExpanded: boolean = false;
  categories: Category[] = [];
  expandedRows: expandedRows = {};

  //pagination
  public totalRecords: number = 0;
  public currentPage: number = 0;
  public size: number = 5;

  public cols: any[] = [];

  constructor(
    private categoryService:CategoryService,
    private messageService: MessageService,
  ) { }

  ngOnInit(): void {
    this.loadCategories(0, 5);
    this.initColumnsTable();
    this.initColumnsTable2();
  }

  public loadCategories(currentPage: number, size: number) {
    this.categoryService.getCategoriesInAdmin(currentPage, size).subscribe({
      next: (response: any) => {
        console.log(response)
        this.categories = response?.content;
        this.currentPage = response?.number;
        this.totalRecords = response?.totalElements;
        this.size = response?.size;
      },
      error: (error: HttpErrorResponse) => {
        console.log("List category : " + error.message);
      }
    });
  }

  expandAll() {
    if (!this.isExpanded) {
      this.categories.forEach(category => category && category.id ? this.expandedRows[category.id] = true : 0);

    } else {
      this.expandedRows = {};
    }
    this.isExpanded = !this.isExpanded;
  }
  editCategory(category) {

  }
  deleteCategory(category) {

  }
  activeCategory(category) {

  }
  editAttribute(attribute) {

  }
  deleteAttribute(attribute) {

  }
  activeAttribute(attribute) {

  }

  applyFilterGlobal($event: any, stringVal: any) {
    this.dt.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

  applyColumnFilter($event: any, field: any, stringVal: any) {
    this.dt.filter(($event.target as HTMLInputElement).value, field, stringVal);
  }

  initColumnsTable(){
    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'name', header: 'Category name' },
      { field: 'status', header: 'Status' }
    ];
  }

  applyFilterGlobal2($event: any, stringVal: any) {
    this.dt2.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

  applyColumnFilter2($event: any, field: any, stringVal: any) {
    this.dt2.filter(($event.target as HTMLInputElement).value, field, stringVal);
  }

  initColumnsTable2(){
    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'name', header: 'Category name' },
      { field: 'status', header: 'Status' }
    ];
  }

  openNewCategory(){

  }

  openNewAttribute(){
    
  }
}
