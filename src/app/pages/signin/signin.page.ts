import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

import { UserService } from '../../services/data/user/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
  private signinGroup: FormGroup;

  constructor(private user: UserService, private formBuilder: FormBuilder, private router: Router) { 
    this.signinGroup = this.formBuilder.group({
      potentialEmail: '',
      potentialPassword: ''
    });
  }

  ngOnInit() {}

  private signin(): void {
    let potentialEmail = this.signinGroup.value.potentialEmail;
    let potentialPassword = this.signinGroup.value.potentialPassword;
    this.user.setUser(potentialEmail, potentialPassword).then(isAuthed => {
      if(isAuthed) { this.router.navigate(['/tabs']); } 
      else { this.router.navigate(['/signin']); }
    }).catch(err => {
      console.error(err);
      this.router.navigate(['/signin']);
    });
  }
}    
