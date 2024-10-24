import { TestBed } from '@angular/core/testing';

import { LocalBrowserStorageService } from './local-browser-storage.service';

describe('LocalBrowserStorageService', () => {
  let service: LocalBrowserStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalBrowserStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
