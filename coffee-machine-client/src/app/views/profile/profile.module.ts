import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { MaterialDesignModuleModule } from 'src/app/material-design-module/material-design-module.module';

@NgModule({
  declarations: [
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    MaterialDesignModuleModule,
  ],
  exports: [
    ProfileComponent,
  ]
})
export class ProfileModule { }
