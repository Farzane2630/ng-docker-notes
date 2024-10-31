import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginFormType } from './types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserServices {
  private ApiUrl = 'http://127.0.0.1:8080/users';

  constructor(private http: HttpClient) {}

  signupUser(userInfo: LoginFormType) {
    return this.http.post(this.ApiUrl, userInfo);
  }
}
