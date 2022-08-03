import { TestBed } from '@angular/core/testing';

import { ImageWritterService } from './image-writter.service';

describe('ImageWritterService', () => {
  let service: ImageWritterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageWritterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
