import { TestBed } from '@angular/core/testing';

import { SongAlbumService } from './song-album.service';

describe('SongAlbumService', () => {
  let service: SongAlbumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SongAlbumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
