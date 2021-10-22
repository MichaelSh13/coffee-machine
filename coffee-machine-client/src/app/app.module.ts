import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialDesignModuleModule } from './material-design-module/material-design-module.module';
import { SideNavModule } from './containers/side-nav/side-nav.module';
import { ToolbarModule } from './containers/toolbar/toolbar.module';
import { FootbarModule } from './containers/footbar/footbar.module';
import { SideBarModule } from './containers/side-bar/side-bar.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SideBarSharedService } from './shared/SideBar.shared.service';
import { AuthSharedService } from './shared/auth.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialDesignModuleModule,
    BrowserAnimationsModule,
    SideNavModule,
    ReactiveFormsModule,
    ToolbarModule,
    SideBarModule,
    FootbarModule,
    AppRoutingModule,
  ],
  providers: [
    SideBarSharedService,
    AuthSharedService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
