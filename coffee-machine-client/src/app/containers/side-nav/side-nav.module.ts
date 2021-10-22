import { NgModule } from '@angular/core';
import { MaterialDesignModuleModule } from '../../material-design-module/material-design-module.module';
import { SideNavComponent } from './side-nav.component';

@NgModule({
  declarations: [
    SideNavComponent,
  ],
  imports: [MaterialDesignModuleModule],
  exports: [SideNavComponent],
})
export class SideNavModule { }
