import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestEnvComponent } from './test-env.component';

describe('TestEnvComponent', () => {
  let component: TestEnvComponent;
  let fixture: ComponentFixture<TestEnvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestEnvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestEnvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
