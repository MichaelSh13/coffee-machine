import { Injectable, ViewChild } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";

@Injectable()
export class ToSharedService {

  buttonClicked = new Subject();

  getButtonClick() {
    return this.buttonClicked.asObservable();
  }

  private isAuthorized=false;
  private tokenSubject = new BehaviorSubject(this.isAuthorized);
  tokenObrerver = this.tokenSubject.asObservable();

  setTokent(value:boolean){
    this.tokenSubject.next(value);
  }





@ViewChild("sidebar") sidebar:any;


isTokenExist=false;
  test(){
    this.tokenObrerver.subscribe(res=>{
        this.isTokenExist=res;
        if(res==false){



          //sget + save tiken
          this.setTokent(true);
        }
    })
  }



  function(){
    this.setTokent(false);
  }

  
}