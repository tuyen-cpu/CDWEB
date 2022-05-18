import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DetailProduct } from '../model/detail-product.model';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiServerUrl = 'http://localhost:3000';
  //private apiServerUrl ='http://localhost:8080';

  constructor(private http: HttpClient) {}

  public getProducts(): Observable<Product[]> {
    //return this.http.get<Product[]>(`${this.apiServerUrl}/product`);
    return this.http.get<Product[]>(`${this.apiServerUrl}/product/all`);
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
