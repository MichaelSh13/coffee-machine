import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { UserI } from 'src/app/services/user.service/interface';
import { AuthSharedService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit, OnDestroy {

  constructor(
    private userService: UserService,
    private authSharedService: AuthSharedService
  ) { }

  authenticated = false
  setAuthenticated(val: boolean) {
    this.authenticated = val
  }

  profile?: UserI
  authServiceSupscription!: Subscription

  ngOnInit(): void {
    this.authServiceSupscription =
      this.authSharedService.getIsAuthenticate().subscribe((auth) => {
        this.setAuthenticated(auth);
      });
    
    if ( this.authenticated ) {
      this.userService.getUserData().subscribe(
        (user) => {
          this.profile = user as UserI|undefined
        },
        ({ status, statusText }: HttpErrorResponse) => {
          if ( status === 401 && statusText === 'Unauthorized' ) {
            this.authSharedService.setSideBarToggleSupscription({
              value: false
            });
            // this.toSideBarService.buttonClicked.next;
          } else {
            // error to formControl
            console.log(status, statusText)
          }
        }
      );
    }
  }

  ngOnDestroy() {
    this.authServiceSupscription.unsubscribe();
  }

}
