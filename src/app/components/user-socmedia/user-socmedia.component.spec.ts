import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSocmediaComponent } from './user-socmedia.component';

describe('UserSocmediaComponent', () => {
  let component: UserSocmediaComponent;
  let fixture: ComponentFixture<UserSocmediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSocmediaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserSocmediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
