import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Role} from "../interfaces/role";
import {StoragePlace} from "../interfaces/storage-place";

@Injectable({
  providedIn: 'root'
})
export class RoleServiceService {

  constructor(private http:HttpClient) { }

  findAll():Observable<Role[]>{
    return this.http.get<Role[]>(`http://localhost:8080/api/v1/roles/findAll`);
  }
  findById(id:String):Observable<Role>{
    return this.http.get<Role>(`http://localhost:8080/api/v1/roles/${id}`);
  }

  postObject(role:Role):Observable<Role>{
    return this.http.post<Role>(`http://localhost:8080/api/v1/roles`, role);
  }

  updateObject(role:Role):Observable<Role>{
    return this.http.post<Role>(`http://localhost:8080/api/v1/roles/update`, role);
  }

  deleteById(id:String):Observable<Role>{
    return this.http.delete<Role>(`http://localhost:8080/api/v1/roles/delete/${id}`);
  }

}
