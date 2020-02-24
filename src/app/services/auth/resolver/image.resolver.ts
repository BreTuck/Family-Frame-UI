import { Injectable } from '@angular/core';

import { Resolve, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { UserService } from '../../data/user/user.service';
import { ImageService } from '../../data/image/image.service';
import { FrameImage } from 'src/app/models/FrameImage';

@Injectable()
export class ImageResolver implements Resolve<FrameImage> {
  constructor(private user: UserService, private image: ImageService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): FrameImage {
    return this.user.findLoadedImage(route.paramMap.get("ID"));
  }
}