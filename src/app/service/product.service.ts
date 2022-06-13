import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Paginator } from 'primeng/paginator';
import { Observable } from 'rxjs';
import { DetailProduct } from '../model/detail-product.model';
import { Pagination } from '../model/pagination.model';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiServerUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  public getProducts(
    q: string | null,
    page: number,
    size: number
  ): Observable<Pagination> {
    return this.http.get<Pagination>(
      `${this.apiServerUrl}/product/all?q=${q}&page=${page}&size=${size}`
    );
  }

  public getProductsByCategoryName(
    categoryName: string | null,
    page: number = 0,
    size: number = 12
  ): Observable<Pagination> {
    return this.http.get<Pagination>(
      `${this.apiServerUrl}/product/all/${categoryName}?page=${page}&size=${size}`
    );
  }
  public getImageProduct(productId: number): Observable<Product> {
    return this.http.post<Product>(
      `${this.apiServerUrl}/product/add`,
      productId
    );
  }

  public getQuantityProductById(productId: number): Observable<number> {
    return this.http.get<number>(
      `${this.apiServerUrl}/product/` + productId + `/quantity`
    );
  }

  public getDetailProductById(productId: number): Observable<DetailProduct> {
    return this.http.get<DetailProduct>(
      `${this.apiServerUrl}/product/` + productId
    );
  }

  public addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.apiServerUrl}/product/add`, product);
  }

  public updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(
      `${this.apiServerUrl}/product/update`,
      product
    );
  }

  public deleteProduct(productId: number): Observable<void> {
    return this.http.delete<void>(
      `${this.apiServerUrl}/product/delete//${productId}`
    );
  }
  public searchProducts(key: string): Observable<Product[]> {
    //return this.http.get<Product[]>(`${this.apiServerUrl}/product`);
    return this.http.get<Product[]>(
      `${this.apiServerUrl}/product/instantSearch/query?key=${key}`
    );
  }
}
