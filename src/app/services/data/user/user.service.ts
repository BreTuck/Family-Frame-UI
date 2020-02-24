import { Injectable } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { ImageService } from '../image/image.service';

import { FrameUser } from '../../../models/FrameUser';
import { FrameImage } from '../../../models/FrameImage';
import { AuthResult, UserData, ImageResult, ImageData } from '../../../models/APIResults';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private frameUser: FrameUser = {
    id: -1,
    name: '',
    email: '',
    frameImages: []
  };

  constructor(private auth: AuthService, private image: ImageService) { }

  public getUser(): FrameUser {
    return this.frameUser;
  }

  public findLoadedImage(imageID: string): FrameImage {
    const userImages = this.frameUser.frameImages;
    for(let idx = 0; idx < userImages.length; idx++) {
      if(userImages[idx].id == Number(imageID)) {
        return userImages[idx];
      }
    }
  }

  public updateUser(userData: UserData): void {
    this.frameUser.id = userData.user_id;
    this.frameUser.name = userData.name;
    this.frameUser.email = userData.email;
  }

  public updateImages(userImages: ImageData[]) {
    for(let idx = 0; idx < userImages.length; idx++) {
      const currImage = {
        id: userImages[idx].image_id,
        title: userImages[idx].title,
        url: userImages[idx].url,
        sender: userImages[idx].sender
      }

      this.frameUser.frameImages.push(currImage);
    }
  
  }
  public async setUser(potentialEmail: string, potentialPassword: string): Promise<boolean> {
    return await this.auth.authenticate(potentialEmail, potentialPassword).then(authResult => {
      if(authResult.success) {
        this.auth.setAuthToken(authResult.token);
        this.image.setAuthToken(authResult.token);
        this.updateUser(authResult.user);
        return true;
      }
      return false;
    }).then(async (userUpdated) => {
      if(userUpdated) {
        const userImages = await this.image.getUserImages();
        if(userImages.success) {
          this.updateImages(userImages.images);
          return true;
        }
        else { return false; }
      } else { return false; }
    }).catch(err => {
      console.error(err);
      return false;
    });
  }
}
