import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ImageShareComponent } from './image-share.component';

describe('ImageShareComponent', () => {
  let component: ImageShareComponent;
  let fixture: ComponentFixture<ImageShareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageShareComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ImageShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
