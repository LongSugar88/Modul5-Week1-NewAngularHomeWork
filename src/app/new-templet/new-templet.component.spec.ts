import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTempletComponent } from './new-templet.component';

describe('NewTempletComponent', () => {
  let component: NewTempletComponent;
  let fixture: ComponentFixture<NewTempletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTempletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTempletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
