import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DocumentType} from "../interfaces/document-type";
import {Employee} from "../interfaces/employee";

@Injectable({
  providedIn: 'root'
})
export class DocumentTypeService {

  constructor(private http:HttpClient) { }

  findAll():Observable<DocumentType[]>{
    return this.http.get<DocumentType[]>(`http://localhost:8080/api/v1/documentTypes/findAll`);
  }
  findById(id:String):Observable<DocumentType>{
    return this.http.get<DocumentType>(`http://localhost:8080/api/v1/documentTypes/${id}`);
  }

  postObject(body:DocumentType):Observable<DocumentType>{
    return this.http.post<DocumentType>(`http://localhost:8080/api/v1/documentTypes/`, body);
  }

  updateObject(body:DocumentType):Observable<DocumentType>{
    return this.http.post<DocumentType>(`http://localhost:8080/api/v1/documentTypes/update`, body);
  }

  deleteById(id:String):Observable<DocumentType>{
    return this.http.delete<DocumentType>(`http://localhost:8080/api/v1/documentTypes/delete/${id}`);
  }
}
