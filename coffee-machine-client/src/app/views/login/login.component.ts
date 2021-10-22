import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { UserRoleE, UserRoleI } from 'src/app/services/auth.service/interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userFormLogin!: FormGroup;
  userFormRegistr!: FormGroup;
  loading: boolean = false;

  constructor(
    public formBuilder: FormBuilder,
    public authService: AuthService,
  ) { }

  readonly userRoles: UserRoleI[] = (
    Object.entries(UserRoleE)
      .map(([key, value]) => ({
        key, value
      } as UserRoleI))
  );

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  ngOnInit(): void {
    this.userFormLogin = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    })  

    this.userFormRegistr = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      name: ['', [Validators.required]],
      role: ['', [Validators.required]],
    })  
  }
  
  Login(){
    if ( this.userFormLogin.valid ) {
      this.loading = true
      this.authService.login(this.userFormLogin.value).subscribe(
        () => {
          this.loading = false
        },
        (e) => {
          console.log(e)
          this.loading = false
        }
      )
    }
  }
  
  Registration() {
    if ( this.userFormRegistr.valid ) {
      this.loading = true
      this.authService.registration(this.userFormLogin.value).subscribe(
        () => {
          this.loading = false
          this.setStep(0)
        },
        (e) => {
          console.log(e)
          this.loading = false
        }
      )
    }
  }

}
