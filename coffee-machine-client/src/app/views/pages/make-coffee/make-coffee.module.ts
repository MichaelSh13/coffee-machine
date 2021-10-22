import { NgModule } from '@angular/core';
import { MakeCoffeeComponent } from './make-coffee.component';
import { MaterialDesignModuleModule } from 'src/app/material-design-module/material-design-module.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [MakeCoffeeComponent],
  exports: [MakeCoffeeComponent],
  providers: [],
  imports: [
    RouterModule,
    CommonModule,
    MaterialDesignModuleModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class MakeCoffeeModule { }
