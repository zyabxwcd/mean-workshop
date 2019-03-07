import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReadWriteServiceService {
  apiUrl = 'http://localhost:3000/users';

  constructor(private httpClient: HttpClient) { }

  fetchUser() {
    return this.httpClient.get(this.apiUrl);
  }

  addUser(user: any):Observable<Object> {
    return this.httpClient.post(this.apiUrl, {name: user.name, email: user.email, password: user.password});
  }
}
