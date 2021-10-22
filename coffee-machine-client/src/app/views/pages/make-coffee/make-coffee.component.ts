import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MakeCoffeeService } from 'src/app/services/make-coffee.service';
import { AuthSharedService } from 'src/app/shared/auth.service';
import { SideBarSharedService } from 'src/app/shared/SideBar.shared.service';
// import { SideBarSharedService } from 'src/app/shared/SideBar.shared.service';
import { CoffeeTypeE, CoffeeTypeI, OrderCoffeeFormI, OrderCoffeeI } from './interface';

@Component({
  selector: 'app-make-coffee',
  templateUrl: './make-coffee.component.html',
  styleUrls: ['./make-coffee.component.scss']
})
export class MakeCoffeeComponent implements OnInit {

  constructor(
    private makeCoffeeService: MakeCoffeeService,
    private authSharedService: AuthSharedService,
    private sideBarSharedService: SideBarSharedService,
  ) { }

  disabled = false
  setDisabled(disabled: boolean) {
    this.disabled = disabled
  }
  disabledTime = false
  setDisabledTime(disabledTime: boolean) {
    this.disabledTime = disabledTime
  }

  authenticated = false
  setAuthenticated(val: boolean) {
    this.authenticated = val
    if ( !this.authenticated ) {
      this.setDisabled(true)
    } else {
      this.setDisabled(false)
    }
  }

  authServiceSupscription!: Subscription
  ngOnInit(): void {
    this.authServiceSupscription =
      this.authSharedService.getIsAuthenticate().subscribe((auth) => {
        this.setAuthenticated(auth);
      });
  }


  onSubmit() {
    if ( this.authenticated ) {
      return this.orderCoffee();
    }
    
    this.sideBarSharedService.toggleSideBar.next('continue');
  }

  getMilliseconds(hours: number, minutes: number) {
    return new Date(
      new Date().setHours(Number(hours))
    ).setMinutes(Number(minutes)) - Date.now();
  }

  private orderCoffee() {
    const { type, time } = this.coffee;
    const [hours, minutes] = time.split(':')
    const data = {
      // @ts-ignore
      typeOfCoffee: CoffeeTypeE[type],
      time: this.getMilliseconds(Number(hours), Number(minutes)),
    };
    this.setDisabledTime(true);
    this.makeCoffeeService.orderCoffee(data)
      .toPromise()
      .then((data: any) => {
        console.log(data)
        setTimeout(() => {
          this.setDisabledTime(false)
        }, data.delay)
      })
      .catch((error: HttpErrorResponse) => {
        const { status, statusText } = error;
        
        if ( status === 401 && statusText === 'Unauthorized' ) {
          this.sideBarSharedService.toggleSideBar.next('continue');
        } else {
          // error to formControl
          console.log(error)
        }
      });
  }

  readonly coffeeTypes: CoffeeTypeI[] = (
    Object.entries(CoffeeTypeE)
      .map(([key, value]) => ({
        key, value
      } as CoffeeTypeI))
  );

  coffee: OrderCoffeeFormI = {
    time: this.timePlusTenMinutes(),
    type: this.coffeeTypes.find(t => t.value === CoffeeTypeE.REGULAR)?.key as CoffeeTypeE,
  };

  timePlusTenMinutes() {
    return new Date(new Date().setMinutes(
      new Date().getMinutes() + 10
    )).toTimeString().split(':').slice(0, 2).join(':');
  }

}
