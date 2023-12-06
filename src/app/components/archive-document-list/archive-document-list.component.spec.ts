import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveDocumentListComponent } from './archive-document-list.component';

describe('ArchiveDocumentListComponent', () => {
  let component: ArchiveDocumentListComponent;
  let fixture: ComponentFixture<ArchiveDocumentListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArchiveDocumentListComponent]
    });
    fixture = TestBed.createComponent(ArchiveDocumentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
