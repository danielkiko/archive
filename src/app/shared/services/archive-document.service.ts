import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Document} from "../interfaces/document";
import {ArchiveDocument} from "../interfaces/archive-document";

@Injectable({
  providedIn: 'root'
})
export class ArchiveDocumentService {

  constructor(private http:HttpClient) { }

  findAll():Observable<ArchiveDocument[]>{
    return this.http.get<ArchiveDocument[]>(`http://localhost:8080/api/v1/archiveDocuments/findAll`);
  }

  findById(id:String):Observable<ArchiveDocument>{
    return this.http.get<ArchiveDocument>(`http://localhost:8080/api/v1/archiveDocuments/${id}`);
  }

  postObject(body:ArchiveDocument):Observable<ArchiveDocument>{
    return this.http.post<ArchiveDocument>(`http://localhost:8080/api/v1/archiveDocuments/`, body);
  }

  updateObject(body:ArchiveDocument):Observable<ArchiveDocument>{
    return this.http.post<ArchiveDocument>(`http://localhost:8080/api/v1/archiveDocuments/update`, body);
  }

  deleteById(id:String):Observable<ArchiveDocument>{
    return this.http.delete<ArchiveDocument>(`http://localhost:8080/api/v1/archiveDocuments/delete/${id}`);
  }
}
