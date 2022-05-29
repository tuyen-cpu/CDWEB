import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from '../model/message.model';
const API_URL = 'http://localhost:3000/user';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  existsUsername(username: string): Observable<Boolean> {
    return this.http.get<Boolean>(
      API_URL + '/checkUsername?username='+username
    );
  }

  existsEmail(email: string): Observable<Boolean> {
    return this.http.get<Boolean>(
      API_URL + '/checkEmail?email='+email
    );
  }
}
