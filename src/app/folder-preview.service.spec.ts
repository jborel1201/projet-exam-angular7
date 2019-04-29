import { TestBed } from '@angular/core/testing';

import { FolderPreviewService } from './folder-preview.service';

describe('FolderPreviewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FolderPreviewService = TestBed.get(FolderPreviewService);
    expect(service).toBeTruthy();
  });
});
