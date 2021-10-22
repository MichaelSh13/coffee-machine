import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment';

const baseUrl = `${environment.apiUrl}/user`;

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(
      private http: HttpClient,
    ) { }

    getUserData() {
      const token = localStorage.getItem('token')
      const headers = new HttpHeaders().set('Authorization', `Bearer ${ token||'' }`);
      
      return this.http.get(`${baseUrl}`, { headers });
    }
}