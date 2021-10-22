import { NgModule } from '@angular/core';
import { MaterialDesignModuleModule } from 'src/app/material-design-module/material-design-module.module';
import { FootbarComponent } from './footbar.component';

@NgModule({
  declarations: [FootbarComponent],
  imports: [MaterialDesignModuleModule],
  exports: [FootbarComponent],
})
export class FootbarModule { }
