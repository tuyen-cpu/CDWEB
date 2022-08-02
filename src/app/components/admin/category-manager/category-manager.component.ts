import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, MessageService, SelectItem } from 'primeng/api';
import { Table } from 'primeng/table';
import { Attribute } from 'src/app/model/attribute.model';
import { Category } from 'src/app/model/category.model';
import { Menu } from 'src/app/model/menu.model';
import { AttributeService } from 'src/app/service/attribute.service';
import { CategoryService } from 'src/app/service/category.service';
import { MenuService } from 'src/app/service/menu.service';

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
  public listStatuses: SelectItem[] = [];
  public listCategories: SelectItem[] = [];
  public selectedStatus: number = 0;
  public selectedCategory: number = 0;  

  public category:any;
  public attribute:any;

  categoryDialog = false;
  attributeDialog = false;
  submitted = false;

  existedCategory = false;
  existedAttribute = false;

  isLoading=false;
  
  constructor(
    private categoryService:CategoryService,
    private attributeService: AttributeService,
    private menuService:MenuService,
    private messageService: MessageService,
  ) { }

  ngOnInit(): void {
    this.loadCategories(0, 5);
    this.initColumnsTable();
    this.initColumnsTable2();
    this.initListStatus();
    this.initListCategories();
  }

  initListStatus() {
    this.listStatuses = [
      { label: 'Hoạt động', value: 'Active' },
      { label: 'Đã hủy', value: 'Inactive' }
    ]
  }

  initListCategories() {
    let menus: Menu[]=[];
    this.menuService.getMenus().subscribe({
      next: (response) => {
        menus= response;
        for(let menu of menus) {
          this.listCategories.push({label: menu.categoryName, value: menu.id})
        }
      },
      error: (error: HttpErrorResponse) => {
        console.log("List category for dropdown : " + error.message);
      }
    });
  }

  public loadCategories(currentPage: number, size: number) {
    this.categoryService.getCategoriesInAdmin(currentPage, size).subscribe({
      next: (response: any) => {
        //console.log(response)
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

  deleteCategory(category) {
    this.categoryService.updateStatus(category.id, 'Inactive').subscribe({
      next: (response: any) => {
        const updatedCategoryId = this.categories.findIndex((obj => obj.id == category.id));
        this.categories[updatedCategoryId].status = 'Inactive';
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Category was inactive', life: 3000 });
      },
      error: (error: HttpErrorResponse) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'The process errors', life: 3000 });
        console.log("Inactive category : " + error.message);
      }
    });
  }

  activeCategory(category) {
    this.categoryService.updateStatus(category.id, 'Active').subscribe({
      next: (response: any) => {
        const updatedCategoryId = this.categories.findIndex((obj => obj.id == category.id));
        this.categories[updatedCategoryId].status = 'Active';
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Category was active', life: 3000 });
      },
      error: (error: HttpErrorResponse) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'The process errors', life: 3000 });
        console.log("Active category : " + error.message);
      }
    });
  }

  deleteAttribute(attribute, categoryId) {
    const updatedCategoryId = this.categories.findIndex((obj => obj.id == categoryId));
    this.attributeService.updateStatus(attribute.id, 'Inactive').subscribe({
      next: (response: any) => {
        if(this.categories[updatedCategoryId].attributes.length>0){
          const updatedAttributeId = this.categories[updatedCategoryId].attributes.findIndex((obj => obj.id == attribute.id));
          this.categories[updatedCategoryId].attributes[updatedAttributeId].status = 'Inactive';
          this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Attribute was inactive', life: 3000 });
        }
      },
      error: (error: HttpErrorResponse) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'The process errors', life: 3000 });
        console.log("Inactive attribute : " + error.message);
      }
    });
  }
  activeAttribute(attribute, categoryId) {
    const updatedCategoryId = this.categories.findIndex((obj => obj.id == categoryId));
    this.attributeService.updateStatus(attribute.id, 'Active').subscribe({
      next: (response: any) => {
        if(this.categories[updatedCategoryId].attributes.length>0){
          const updatedAttributeId = this.categories[updatedCategoryId].attributes.findIndex((obj => obj.id == attribute.id));
          this.categories[updatedCategoryId].attributes[updatedAttributeId].status = 'Active';
          this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Attribute was active', life: 3000 });
        }
      },
      error: (error: HttpErrorResponse) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'The process errors', life: 3000 });
        console.log("Active attribute : " + error.message);
      }
    });
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
    const newCategory:Category={
      id: 0,
      name: '',
      status: '',
      attributes: []
    }
    this.category=newCategory;
    this.submitted = false;
    this.categoryDialog = true;
  }

  openNewAttribute(){
    const newAttribute:Attribute={
      id: 0,
      name: '',
      value: '',
      status: '',
      categoryId: 0
    }
    this.attribute=newAttribute;
    this.submitted = false;
    this.attributeDialog = true;
  }

  existsCategoryName(categoryName){
    this.categoryService.existsCategoryName(categoryName).subscribe({
      next: (response: boolean) => {
        const value:boolean  = response;
        if (value == true) {
          this.existedCategory = true;
        } else {
          this.existedCategory = false;
        }
      },
      error: (error: HttpErrorResponse) => {
        console.log("Check Category Name : " + error.message);
      }
    });
  }

  existsAttributeName(attributeName){
    this.attributeService.existsAttributeName(attributeName).subscribe({
      next: (response: boolean) => {
        const value:boolean  = response;
        if (value == true) {
          this.existedAttribute = true;
        } else {
          this.existedAttribute = false;
        }
      },
      error: (error: HttpErrorResponse) => {
        console.log("Check Attribute Name : " + error.message);
      }
    });
  }

  hideDialogCategory(){
    this.categoryDialog = false;
    this.submitted = false;
  }

  saveCategory(){
    this.isLoading = true;
    this.submitted = true;

    this.isLoading = true;
    this.submitted = true;

    if (!this.category.status) {
      this.category.status = 'Active';
    }
    if (this.category.id && this.category.id > 0 ) {
      this.categories = this.categories.filter(val => val.id !== this.category.id);
    }
    this.categoryService.saveCategory(this.category).subscribe({
      next: (response: Category) => {
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Category saved', life: 3000 });
        this.category = response;
        this.categories.unshift(this.category);
        this.isLoading = false;
        this.categoryDialog = false;
        this.category = {};
      },
      error: (error: HttpErrorResponse) => {
        this.isLoading = false;
        this.categoryDialog = false;
        this.category = {};
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'The process errors', life: 3000 });
        console.log("Saving Category : " + error.message);
      }
    });
  }

  hideDialogAttribute(){
    this.attributeDialog = false;
    this.submitted = false;
  }

  saveAttribute(){
    this.isLoading = true;
    this.submitted = true;
    const categoryId = this.attribute.categoryId;
    const updatedCategoryId = this.categories.findIndex((obj => obj.id == categoryId));

    if (!this.attribute.status) {
      this.attribute.status = 'Active';
    }
    if (this.attribute.id && this.attribute.id > 0 ) {
      this.categories[updatedCategoryId].attributes = this.categories[updatedCategoryId].attributes.filter(val => val.id !== this.attribute.id);
    }
    this.attributeService.saveAttribute(this.attribute).subscribe({
      next: (response: Attribute) => {
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Attribute saved', life: 3000 });
        this.attribute = response;
        this.categories[updatedCategoryId].attributes.unshift(this.attribute);
        this.isLoading = false;
        this.attributeDialog = false;
        this.attribute = {};
      },
      error: (error: HttpErrorResponse) => {
        this.isLoading = false;
        this.attributeDialog = false;
        this.attribute = {};
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'The process errors', life: 3000 });
        console.log("Saving attribute : " + error.message);
      }
    });
  }

  editAttribute(attribute) {
    this.attribute=attribute;
    this.attributeDialog=true;
  }

  editCategory(category) {
    this.category=category;
    this.categoryDialog=true;
  }
}
