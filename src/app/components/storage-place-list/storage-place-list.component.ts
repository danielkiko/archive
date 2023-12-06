import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {StoragePlace} from "../../shared/interfaces/storage-place";
import {StoragePlaceService} from "../../shared/services/storage-place.service";

@Component({
  selector: 'app-storage-place-list',
  templateUrl: './storage-place-list.component.html',
  styleUrls: ['./storage-place-list.component.css']
})
export class StoragePlaceListComponent implements OnInit {

  storagePlaces!:StoragePlace[];

  constructor(
    private storagePlaceService:StoragePlaceService,
    private router: Router,
  ) {}
  ngOnInit():void {
    this.getData();
  }
  getData() {
    this.storagePlaceService.findAll().subscribe({
      next: (Response:StoragePlace[]) => this.storagePlaces = Response,
      error: (e) => console.error(e),
      complete: () => console.info("сработало")
    })
  }
  linkToRole(id?: String) {
    if(id) {
      this.router.navigate([this.router.url, "storagePlace", id]);
    }
  }

}
