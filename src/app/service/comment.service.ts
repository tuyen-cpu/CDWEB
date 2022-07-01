import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DetailComment } from '../model/comment.model';
import { AppSettings } from '../shared/app-settings';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  REST_API = AppSettings.REST_API + '/comment';
  constructor(private http: HttpClient) { }

  comment(comment: any): Observable<DetailComment> {
    //console.log("service: " + JSON.stringify(comment))
    return this.http.post<DetailComment>(
      this.REST_API + '/add',
      JSON.stringify(comment),
      { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
    );
  }

  getCommentsByProductId(productId: number): Observable<DetailComment[]> {
    return this.http.get<DetailComment[]>(
      `${this.REST_API}/all/product-${productId}`,
      { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
    );
  }

  getPageCommentsByProductId(productId: number, page: number): Observable<DetailComment[]> {
    return this.http.get<DetailComment[]>(
      `${this.REST_API}/all/product-${productId}/p?page=${page}`,
      { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
    );
  }

}