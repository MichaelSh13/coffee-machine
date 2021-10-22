import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";

@Injectable()
export class AuthSharedService {

  token = localStorage.getItem('token')
  
  isAuthenticate = new BehaviorSubject(!!this.token);

  getIsAuthenticate() {
    return this.isAuthenticate.asObservable();
  }

  setSideBarToggleSupscription(
    data: { value: boolean, token: string }|{value: false}
  ) {
    this.isAuthenticate.next(data.value);
    if ( data.value && data.token ) {
      localStorage.setItem('token', data.token)
    } else {
      localStorage.removeItem('token')
    }
  }

};
