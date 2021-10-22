import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { MaterialDesignModuleModule } from '../../material-design-module/material-design-module.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    MaterialDesignModuleModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    LoginComponent,
  ]
})
export class LoginModule {}
