import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FrameUser } from '../../models/FrameUser';
import { FrameImage } from 'src/app/models/FrameImage';

@Component({
  selector: 'app-image-manager',
  templateUrl: './image-manager.page.html',
  styleUrls: ['./image-manager.page.scss'],
})
export class ImageManagerPage implements OnInit {
  private currentUser: FrameUser;
  private currentImage: FrameImage;

  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit() { 
    this.currentUser = this.activeRoute.snapshot.data.user;
    this.currentImage = this.activeRoute.snapshot.data.image; 
  }

  // To Open Delete Alert
  // To Open Manage Modal
  // To Open Share Modal

}
