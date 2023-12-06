import {Component, OnInit} from '@angular/core';
import {Employee} from "../../shared/interfaces/employee";
import {EmployeeService} from "../../shared/services/employee.service";
import {Router} from "@angular/router";
import {DocumentType} from "../../shared/interfaces/document-type";
import {DocumentTypeService} from "../../shared/services/document-type.service";

@Component({
  selector: 'app-document-type-list',
  templateUrl: './document-type-list.component.html',
  styleUrls: ['./document-type-list.component.css']
})
export class DocumentTypeListComponent implements OnInit {

  documentTypes!:DocumentType[];

  constructor(
    private documentTypeService:DocumentTypeService,
    private router: Router,
  ) {}
  ngOnInit():void {
    this.getData();
  }
  getData() {
    this.documentTypeService.findAll().subscribe({
      next: (Response:DocumentType[]) => this.documentTypes = Response,
      error: (e) => console.error(e),
      complete: () => console.info("сработало")
    })
  }
  linkTo(id?: String) {
    if(id) {
      this.router.navigate([this.router.url, "documentTypesItem", id]);
    }
  }

}
