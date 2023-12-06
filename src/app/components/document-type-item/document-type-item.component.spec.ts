import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentTypeItemComponent } from './document-type-item.component';

describe('DocumentTypeItemComponent', () => {
  let component: DocumentTypeItemComponent;
  let fixture: ComponentFixture<DocumentTypeItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DocumentTypeItemComponent]
    });
    fixture = TestBed.createComponent(DocumentTypeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
