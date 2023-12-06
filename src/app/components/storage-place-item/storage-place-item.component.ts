import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {StoragePlaceService} from "../../shared/services/storage-place.service";
import {StoragePlace} from "../../shared/interfaces/storage-place";
import {Document} from "../../shared/interfaces/document";

@Component({
  selector: 'app-storage-place-item',
  templateUrl: './storage-place-item.component.html',
  styleUrls: ['./storage-place-item.component.css']
})
export class StoragePlaceItemComponent  implements OnInit {
  id: String | null = null;
  StoragePlaceForm!: FormGroup;
  storagePlace!: StoragePlace;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private storagePlaceService: StoragePlaceService,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.getData();
    })
  }

  async getData() {
    const controls = {
      name: [null, [Validators.required]],
      address: [null, [Validators.required]],
    }
    this.StoragePlaceForm = this.formBuilder.group(controls);
    if (this.id && this.id!= '') {
      this.storagePlaceService.findById(this.id).subscribe({
        next: (Response: StoragePlace) => {
          this.storagePlace = Response
          this.StoragePlaceForm.patchValue(this.storagePlace)
        },
        error: (e) => console.error(e),
        complete: () => console.info("сработало")
      })
    } else {
      this.StoragePlaceForm.reset();
    }
  }
  async onAdd() {
      let storagePlace: StoragePlace = this.StoragePlaceForm.value;


    if (this.id) {
      storagePlace.id = this.id;
      this.storagePlaceService.updateObject(storagePlace).subscribe({
        next: (Response: StoragePlace) => {
          console.log(Response)
          this.router.navigate(['/storagePlaces']);
        },
        error: (e) => console.error(e),
        complete: () => console.info("сработало")
      })
    } else {
      this.storagePlaceService.postObject(storagePlace).subscribe({
        next: (Response: StoragePlace) => {
          console.log(Response)
        },
        error: (e) => console.error(e),
        complete: () => console.info("сработало")
      })
    }
  }

  async onDelete() {
    if (this.id) {
      this.storagePlaceService.deleteById(this.id).subscribe({
        next: (Response: StoragePlace) => {
          console.log(Response)
          this.router.navigate(['/storagePlaces']);
        },
        error: (e) => console.error(e),
        complete: () => console.info("сработало")
      })
    }
  }
  onReset() {
    this.StoragePlaceForm.patchValue(this.storagePlace);
  }


}
