import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { OrderCoffeeI } from '../views/pages/make-coffee/interface';

const baseUrl = `${environment.apiUrl}/coffee`;

@Injectable({ providedIn: 'root' })
export class MakeCoffeeService {
    constructor(
      private http: HttpClient,
    ) { }

    orderCoffee(params: OrderCoffeeI) {
      const token = localStorage.getItem('token')
      const headers = new HttpHeaders().set('Authorization', `Bearer ${ token||'' }`);
      
      return this.http.post(baseUrl, params, { headers });
    }
}