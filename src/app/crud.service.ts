import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private httpClient: HttpClient) { }

  apiUrl = 'http://localhost:3000/users';

  fetchAllUsers():Observable<Object> {
    return this.httpClient.get(this.apiUrl)
  }

  addUser(user: {}):Observable<Object> {
    return this.httpClient.post(this.apiUrl, user);
  }
}
