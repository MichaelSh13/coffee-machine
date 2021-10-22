import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar.component';
import { MaterialDesignModuleModule } from 'src/app/material-design-module/material-design-module.module';
import { ProfileModule } from 'src/app/views/profile/profile.module';
import { LoginModule } from 'src/app/views/login/login.module';

@NgModule({
  declarations: [SideBarComponent],
  imports: [
    CommonModule,
    MaterialDesignModuleModule,
    ProfileModule,
    LoginModule,
  ],
  exports: [SideBarComponent],
})
export class SideBarModule { }
