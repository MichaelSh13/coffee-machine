import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { SignInAuthI, SignUpAuthI, SuccessLoginI } from './interface';
import { AuthSharedService } from 'src/app/shared/auth.service';

const baseUrl = `${environment.apiUrl}/auth`;

@Injectable({ providedIn: 'root' })
export class AuthService {
    constructor(
      private http: HttpClient,
      private authSharedService: AuthSharedService,
    ) {}

    registration(params: SignUpAuthI) {
      return this.http.post(`${baseUrl}/registration`, params);
    }

    login(params: SignInAuthI) {
      return this.http.post<SuccessLoginI>(`${baseUrl}/login`, params).pipe(
        map(({ access_token: token }) => {
          this.authSharedService.setSideBarToggleSupscription({
            value: true,
            token,
          })
        })
      );
    }
}