import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ImageManagerPage } from './image-manager.page';

describe('ImageManagerPage', () => {
  let component: ImageManagerPage;
  let fixture: ComponentFixture<ImageManagerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageManagerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ImageManagerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
