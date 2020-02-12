import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/data/user/user.service';
import { FrameUser } from 'src/app/models/FrameUser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})

export class DashboardPage implements OnInit {
  private currentUser: FrameUser;

  constructor(private user: UserService, private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit() { this.currentUser = this.activeRoute.snapshot.data.user; }

  // public buttonClick(): void {
  //   this.auth.deauthenticate();
  //   this.router.navigate(['/landing']);
  // }
}
