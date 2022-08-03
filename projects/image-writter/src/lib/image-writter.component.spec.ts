import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageWritterComponent } from './image-writter.component';

describe('ImageWritterComponent', () => {
  let component: ImageWritterComponent;
  let fixture: ComponentFixture<ImageWritterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageWritterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageWritterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
