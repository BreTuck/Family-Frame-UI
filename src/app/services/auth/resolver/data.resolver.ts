import { Injectable } from '@angular/core';

import { Resolve } from '@angular/router';

import { UserService } from '../../data/user/user.service';
import { FrameUser } from 'src/app/models/FrameUser';

@Injectable()
export class DataResolver implements Resolve<FrameUser> {
  constructor(private user: UserService) {}

  resolve() {
    return this.user.getUser();
  }
}