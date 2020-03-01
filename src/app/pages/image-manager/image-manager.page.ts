import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FrameUser } from '../../models/FrameUser';
import { FrameImage } from 'src/app/models/FrameImage';
import { ModalController } from '@ionic/angular';
import { ImageEditComponent } from '../../components/image-edit/image-edit.component';

@Component({
  selector: 'app-image-manager',
  templateUrl: './image-manager.page.html',
  styleUrls: ['./image-manager.page.scss'],
})
export class ImageManagerPage implements OnInit {
  @ViewChild('imageToManage', { read: ElementRef, static: false}) private imageToManage: ElementRef;
  private currentUser: FrameUser;
  private currentImage: FrameImage;
  private currentDegree: number = 0;

  constructor(private activeRoute: ActivatedRoute, private renderer: Renderer2, private modalCtrl: ModalController) { }

  ngOnInit() { 
    this.currentUser = this.activeRoute.snapshot.data.user;
    this.currentImage = this.activeRoute.snapshot.data.image; 
  }

  // To Rotate Image
  public rotateImage(buttonClicked: any): void {
    let imageElem: any = this.imageToManage.nativeElement;
    if(imageElem != undefined) { 
      if (buttonClicked.id == 'leftBtn') { this.currentDegree = this.currentDegree - 90; }
      if (buttonClicked.id == 'rightBtn') { this.currentDegree = this.currentDegree - 90; }
      this.renderer.setStyle(this.imageToManage.nativeElement, 'transform', `rotate(${this.currentDegree}deg)`);
    }
  }

  // To Open Delete Alert
  // To Open Manage Modal
  public async presentEditModal(): Promise<void> { 
    const editModal = await this.modalCtrl.create({
      component: ImageEditComponent,
      componentProps: {
        imageData: this.currentImage
      }
    });
    return await editModal.present();
  }

  public openEditModal(): void {
    this.presentEditModal();
  }

  // To Open Share Modal

}
