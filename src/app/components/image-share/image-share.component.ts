import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';


@Component({
  selector: 'app-image-share',
  templateUrl: './image-share.component.html',
  styleUrls: ['./image-share.component.scss'],
})
export class ImageShareComponent implements OnInit {

  private addRecipientsForm: FormGroup;
  private recipients: FormArray;

  constructor(private formBuilder: FormBuilder) { 
    this.addRecipientsForm = this.formBuilder.group({
      recipients: this.formBuilder.array([this.addRecipientGroup()])
    });
  }

  private addRecipientGroup(): FormGroup {
    return this.formBuilder.group({
      recipientName: [''],
      recipientEmail: ['']
    });
  }

  private addToRecipeientArray(): void {
    this.recipients = this.addRecipientsForm.get('recipients') as FormArray;
    this.recipients.push(this.addRecipientGroup());
  }


  ngOnInit() {}

}
