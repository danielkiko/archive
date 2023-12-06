import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoragePlaceItemComponent } from './storage-place-item.component';

describe('StoragePlaceItemComponent', () => {
  let component: StoragePlaceItemComponent;
  let fixture: ComponentFixture<StoragePlaceItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StoragePlaceItemComponent]
    });
    fixture = TestBed.createComponent(StoragePlaceItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
