import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from '../shared/app-settings';
import { Category } from '../model/category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  REST_API = AppSettings.REST_API + '/category';
  constructor(private http: HttpClient) { }

  getCategoriesInAdmin(page: number, size: number): Observable<Category[]> {
    return this.http.get<Category[]>(
      this.REST_API + '/all/admin?page=' + page + '&size=' + size,
      { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
    );
  }

  updateCancelledStatus(id: number[]): Observable<boolean> {
    return this.http.get<boolean>(
      this.REST_API + '/editStatus?id=' + id,
      { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
    );
  }

  updateStatus(id: number, status: number): Observable<boolean> {
    return this.http.get<boolean>(
      this.REST_API + '/updateStatus?id=' + id + '&status=' + status,
      { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
    );
  }
}
