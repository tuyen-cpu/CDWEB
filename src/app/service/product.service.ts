import { Image } from './../model/image.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Paginator } from 'primeng/paginator';
import { Observable, BehaviorSubject, tap } from 'rxjs';
import { DetailProduct } from '../model/detail-product.model';
import { Pagination } from '../model/pagination.model';
import { Product, ProductAdd } from '../model/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiServerUrl = 'http://localhost:3000';
  imageChanged: BehaviorSubject<Image[]> = new BehaviorSubject([]);
  images: Image[] = [];
  productManagerChanged: BehaviorSubject<Product[]> = new BehaviorSubject([]);
  productManager: Product[] = [];

  cateId: BehaviorSubject<number> = new BehaviorSubject(0);

  constructor(private http: HttpClient) {}

  public updateCatId(cateId){
    this.cateId.next(cateId);
  }

  public getCateId(){
    return this.cateId.asObservable();
  }

  public resetImages() {
    this.images = [];
    this.imageChanged.next(this.images);
  }
  public getProducts(
    q: string,
    page: number,
    size: number
  ): Observable<Pagination> {
    return this.http.get<Pagination>(
      `${this.apiServerUrl}/product/all?q=${q}&page=${page}&size=${size}`
    );
  }
  public getProductsManager(
    q: string,
    page: number,
    size: number
  ): Observable<Pagination> {
    return this.http
      .get<Pagination>(
        `${this.apiServerUrl}/product/all?q=${q}&page=${page}&size=${size}`
      )
      .pipe(
        tap((resp) => {
          this.productManager = this.productManager.concat(resp.products);
          this.productManagerChanged.next(this.productManager);
        })
      );
  }
  public getProductsByCategoryId(
    id: number | null,
    page: number = 0,
    size: number = 12
  ): Observable<Pagination> {
    return this.http.get<Pagination>(
      `${this.apiServerUrl}/product/all/${id}?page=${page}&size=${size}`
    );
  }
  public getImagesProduct(productId: number): Observable<Image[]> {
    return this.http
      .get<Image[]>(`${this.apiServerUrl}/image/${productId}`)
      .pipe(
        tap((resp) => {
          this.images = this.images.concat(resp);
          console.log();
          this.imageChanged.next(this.images);
        })
      );
  }
  public deleteImage(productId: number): Observable<number> {
    return this.http
      .delete<number>(`${this.apiServerUrl}/image/delete/${productId}`)
      .pipe(
        tap((resp) => {
          this.images = this.images.filter((img) => img.id !== resp);
          this.imageChanged.next(this.images);
        })
      );
  }
  public getLongDescriptionById(productId: number) {
    return this.http.get(
      `${this.apiServerUrl}/product/` + productId + '/description',
      { responseType: 'text' }
    );
  }

  public addImage(image: any[], productId: number): Observable<Image[]> {
    var f = [];
    image.forEach((img) => {
      f.push({ link: img, productId: productId });
    });
    return this.http.post<Image[]>(`${this.apiServerUrl}/image/add`, f).pipe(
      tap((resp) => {
        this.images = this.images.concat(resp);
        this.imageChanged.next(this.images);
      })
    );
  }

  public uploadFileImage(file: any): Observable<String[]> {
    return this.http.post<String[]>(`${this.apiServerUrl}/FileUpload`, file);
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

  public addProduct(product: ProductAdd): Observable<Product> {
    return this.http
      .post<Product>(`${this.apiServerUrl}/product/add`, product)
      .pipe(
        tap((resp) => {
          this.productManager.push(resp);
          this.productManagerChanged.next(this.productManager);
        })
      );
  }

  public updateProduct(product: ProductAdd): Observable<Product> {
    {
      return this.http
        .put<Product>(`${this.apiServerUrl}/product/update`, product)
        .pipe(
          tap((resp) => {
            this.productManager = this.productManager.map((product) =>
              product.id === resp.id ? { ...product, ...resp } : { ...product }
            );
            this.productManagerChanged.next(this.productManager);
          })
        );
    }
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

  public getPriceProductById(productId: number): Observable<number> {
    return this.http.get<number>(
      `${this.apiServerUrl}/product/` + productId + '/price'
    );
  }

  public filterProduct(paras: any): Observable<Pagination> {
    let params = new HttpParams();
    Object.keys(paras).forEach((k) => {
      params = params.set(k, paras[k]);
    });
    console.log({ params });
    return this.http.get<Pagination>(`${this.apiServerUrl}/product/filter`, {
      params: params,
    });
  }

  public getRelatedProducts(catId: number): Observable<Product[]> {
    return this.http.get<Product[]>(
      `${this.apiServerUrl}/product/relate?catId=${catId}`
    );
  }
}
