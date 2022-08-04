import { TestBed } from '@angular/core/testing';

import { ImageWriterService } from './image-writer.service';

describe('ImageWriterService', () => {
  let service: ImageWriterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageWriterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
