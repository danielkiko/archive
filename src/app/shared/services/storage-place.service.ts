import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {StoragePlace} from "../interfaces/storage-place";

@Injectable({
  providedIn: 'root'
})
export class StoragePlaceService {

 constructor(private http:HttpClient) { }

  findAll():Observable<StoragePlace[]>{
    return this.http.get<StoragePlace[]>(`http://localhost:8080/api/v1/storagePlaces/findAll`);
  }
  findById(id:String):Observable<StoragePlace>{
    return this.http.get<StoragePlace>(`http://localhost:8080/api/v1/storagePlaces/${id}`);
  }

  postObject(storagePlace:StoragePlace):Observable<StoragePlace>{
    return this.http.post<StoragePlace>(`http://localhost:8080/api/v1/storagePlaces`, storagePlace);
  }

  updateObject(storagePlace:StoragePlace):Observable<StoragePlace>{
    return this.http.post<StoragePlace>(`http://localhost:8080/api/v1/storagePlaces/update`, storagePlace);
  }

  deleteById(id:String):Observable<StoragePlace>{
    return this.http.delete<StoragePlace>(`http://localhost:8080/api/v1/storagePlaces/delete/${id}`);
  }
}
