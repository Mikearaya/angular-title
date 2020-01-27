import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularTitleComponent } from './angular-title.component';

describe('AngularTitleComponent', () => {
  let component: AngularTitleComponent;
  let fixture: ComponentFixture<AngularTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
