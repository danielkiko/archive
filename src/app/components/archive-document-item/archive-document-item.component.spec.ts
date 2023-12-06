import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveDocumentItemComponent } from './archive-document-item.component';

describe('ArchiveDocumentItemComponent', () => {
  let component: ArchiveDocumentItemComponent;
  let fixture: ComponentFixture<ArchiveDocumentItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArchiveDocumentItemComponent]
    });
    fixture = TestBed.createComponent(ArchiveDocumentItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
