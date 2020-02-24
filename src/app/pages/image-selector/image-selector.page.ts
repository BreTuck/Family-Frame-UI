import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FrameUser } from 'src/app/models/FrameUser';
import { FrameImage } from 'src/app/models/FrameImage';

@Component({
  selector: 'app-image-selector',
  templateUrl: './image-selector.page.html',
  styleUrls: ['./image-selector.page.scss'],
})
export class ImageSelectorPage implements OnInit {
  private currentUser: FrameUser;
  constructor(private activeRoute: ActivatedRoute, private route: Router) { }

  ngOnInit() { this.currentUser = this.activeRoute.snapshot.data.user; }

  public selectImage(selectedImage: FrameImage): void {
    let imgToManage: FrameImage;
    this.currentUser.frameImages.forEach(img => {
      if(img.id == selectedImage.id) {
        imgToManage = img;
        this.route.navigate(['tabs/image-selector/manage/', selectedImage.id ]);
      }
    });
    
  }
}
