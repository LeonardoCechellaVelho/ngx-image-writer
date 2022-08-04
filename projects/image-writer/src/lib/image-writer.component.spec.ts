import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageWriterComponent } from './image-writer.component';

describe('ImageWriterComponent', () => {
  let component: ImageWriterComponent;
  let fixture: ComponentFixture<ImageWriterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageWriterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageWriterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
