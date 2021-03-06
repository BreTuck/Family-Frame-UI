import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AccountManagerPage } from './account-manager.page';

describe('AccountManagerPage', () => {
  let component: AccountManagerPage;
  let fixture: ComponentFixture<AccountManagerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountManagerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AccountManagerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
