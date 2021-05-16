import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilesDownloadingComponent } from './files-downloading.component';

describe('FilesDownloadingComponent', () => {
  let component: FilesDownloadingComponent;
  let fixture: ComponentFixture<FilesDownloadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilesDownloadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilesDownloadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
