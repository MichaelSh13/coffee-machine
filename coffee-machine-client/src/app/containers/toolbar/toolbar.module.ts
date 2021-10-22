import { NgModule } from '@angular/core';
import { ToolbarComponent } from './toolbar.component';
import { MaterialDesignModuleModule } from '../../material-design-module/material-design-module.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ToolbarComponent,
  ],
  imports: [
    CommonModule,
    MaterialDesignModuleModule,
  ],
  exports: [
    ToolbarComponent,
  ],
})
export class ToolbarModule { }
