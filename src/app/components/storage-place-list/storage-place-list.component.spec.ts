import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoragePlaceListComponent } from './storage-place-list.component';

describe('StoragePlaceListComponent', () => {
  let component: StoragePlaceListComponent;
  let fixture: ComponentFixture<StoragePlaceListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StoragePlaceListComponent]
    });
    fixture = TestBed.createComponent(StoragePlaceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
