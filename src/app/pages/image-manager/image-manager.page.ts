import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FrameUser } from '../../models/FrameUser';

@Component({
  selector: 'app-image-manager',
  templateUrl: './image-manager.page.html',
  styleUrls: ['./image-manager.page.scss'],
})
export class ImageManagerPage implements OnInit {
  private currentUser: FrameUser;

  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit() { this.currentUser = this.activeRoute.snapshot.data.user; }

}
