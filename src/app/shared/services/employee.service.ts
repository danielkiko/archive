import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Employee} from "../interfaces/employee";
import {Role} from "../interfaces/role";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) {

  }
  findAll():Observable<Employee[]>{
    return this.http.get<Employee[]>(`http://localhost:8080/api/v1/employees/findAll`);
  }
  findById(id:String):Observable<Employee>{
    return this.http.get<Employee>(`http://localhost:8080/api/v1/employees/${id}`);
  }

  postObject(body:Employee):Observable<Employee>{
    return this.http.post<Employee>(`http://localhost:8080/api/v1/employees/`, body);
  }

  updateObject(body:Employee):Observable<Employee>{
    return this.http.post<Employee>(`http://localhost:8080/api/v1/employees/update`, body);
  }

  deleteById(id:String):Observable<Employee>{
    return this.http.delete<Employee>(`http://localhost:8080/api/v1/employees/delete/${id}`);
  }
}
