import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Subscription } from 'rxjs';
import { SideBarSharedService } from 'src/app/shared/SideBar.shared.service';
import { SideBarToggleT } from 'src/app/shared/SideBar.shared.service/interface';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit, OnDestroy {

  @Input() sidenav!: MatSidenav;
  
  constructor(
    private sideBarSharedService: SideBarSharedService,
  ) {}

  toggle!: SideBarToggleT;
  setToggle(toggle: SideBarToggleT) {
    this.toggle = toggle;
  }
  getToggle() {
    return this.sideBarSharedService.getToggle(this.toggle);
  }

  sideBarToggleSupscription!: Subscription;

  ngOnInit() {
    this.sideBarToggleSupscription = this.sideBarSharedService
      .getToggleSideBar()
      .subscribe((toggle: SideBarToggleT) => (
        this.setToggle(toggle)
      ))
  }

  setSideBarToggleSupscription() {
    this.sideBarSharedService.toggleSideBar.next(
      this.getToggle() ? 'close' : 'continue'
    );
  }

  ngOnDestroy() {
    this.sideBarToggleSupscription.unsubscribe();
  }

}
