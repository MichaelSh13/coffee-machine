import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { SideBarToggleT } from "./interface";

@Injectable()
export class SideBarSharedService {

  constructor() {}
  
  toggleSideBar = new Subject<SideBarToggleT>();

  getToggleSideBar() {
    return this.toggleSideBar.asObservable();
  }

  getToggle(toggle: SideBarToggleT) {
    if ( toggle === 'continue' || toggle === 'login' ) {
      return true;
    }
    
    return false;
  }
  
}