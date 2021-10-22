import { Component, Input, OnInit } from '@angular/core';
import { UserI } from 'src/app/services/user.service/interface';
import { AuthSharedService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @Input() profile!: UserI;

  constructor(
    private authSharedService: AuthSharedService,
  ) { }

  logout() {
    this.authSharedService.setSideBarToggleSupscription({
      value: false
    });
  }

  ngOnInit(): void {
  }

}
