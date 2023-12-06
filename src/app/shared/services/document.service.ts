import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Document} from "../interfaces/document";
import {DocumentType} from "../interfaces/document-type";


@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  constructor(private http:HttpClient) { }

  findAll():Observable<Document[]>{
    return this.http.get<Document[]>(`http://localhost:8080/api/v1/documents/findAll`);
  }

  findById(id:String):Observable<Document>{
    return this.http.get<Document>(`http://localhost:8080/api/v1/documents/${id}`);
  }

  postObject(body:Document):Observable<Document>{
    return this.http.post<Document>(`http://localhost:8080/api/v1/documents/`, body);
  }

  updateObject(body:Document):Observable<Document>{
    return this.http.post<Document>(`http://localhost:8080/api/v1/documents/update`, body);
  }

  deleteById(id:String):Observable<Document>{
    return this.http.delete<Document>(`http://localhost:8080/api/v1/documents/delete/${id}`);
  }
}
