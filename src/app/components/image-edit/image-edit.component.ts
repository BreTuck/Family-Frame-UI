import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';
import { ImageService } from 'src/app/services/data/image/image.service';

@Component({
  selector: 'app-image-edit',
  templateUrl: './image-edit.component.html',
  styleUrls: ['./image-edit.component.scss'],
})
export class ImageEditComponent implements OnInit {
  private editImageForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private image: ImageService) { 
    this.editImageForm = this.formBuilder.group({
      updatedTitle: ['']
    });
  }

  private updateImage(): void {
    const newImgData = { title: this.editImageForm.value.updatedTitle };

    this.image.updateImage(newImgData).then(updateResult => {
      if(updateResult.success) {
        // We will have the curretnt Image so update that data, it will be passed back and then added to the users images
        console.log(updateResult.images);
      } else { // The update failed 
      }
    }).catch(err => {
      console.error(err);
    });
  }


  ngOnInit() {}

}
