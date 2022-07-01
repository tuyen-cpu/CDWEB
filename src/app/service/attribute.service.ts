import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AttributeProduct } from '../model/attribute-product.model';

@Injectable({
  providedIn: 'root',
})
export class AttributeService {
  private apiServerUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  public getAttributesByCategoryId(
    cateId: number
  ): Observable<AttributeProduct[]> {
    return this.http.get<AttributeProduct[]>(
      `${this.apiServerUrl}/attribute/${cateId}`
    );
  }
}
