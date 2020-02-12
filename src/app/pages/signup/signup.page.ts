import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  private signupGroup: FormGroup;
  
  constructor(private auth: AuthService, private formBuilder: FormBuilder, private router: Router) { 
    this.signupGroup = this.formBuilder.group({
      newName: '',
      newEmail: '',
      newPassword: '',
      newPasswordConfirm: ''
    });
  }

  ngOnInit() { }

  private signup(): void {
    const newName = this.signupGroup.value.newName;
    const newEmail = this.signupGroup.value.newEmail;
    const newPassword = this.signupGroup.value.newPassword;
    const newPasswordConfirmation = this.signupGroup.value.newPasswordConfirm;
    if(newPassword === newPasswordConfirmation) {
      this.auth.createUser(newName, newEmail, newPassword).then(isAuthed => {
        if(isAuthed) { this.router.navigate(['/tabs']); } 
        else { this.router.navigate(['/signup']); }
      }).catch(err => {
        console.error(err);
        this.router.navigate(['/signup']);
      });
    } else {
      console.log(`PASSWORD DO NOT MATCH`);
    }
  }
}
