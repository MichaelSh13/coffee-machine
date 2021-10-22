import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SideBarSharedService } from './shared/SideBar.shared.service';
import { SideBarToggleT } from './shared/SideBar.shared.service/interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

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

  ngOnDestroy() {
    this.sideBarToggleSupscription.unsubscribe();
  }
  
  title = 'coffee-machine-client';
}
