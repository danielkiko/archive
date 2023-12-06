import {Component, OnInit} from '@angular/core';
import {Employee} from "../../shared/interfaces/employee";
import {EmployeeService} from "../../shared/services/employee.service";
import {Router} from "@angular/router";
import {DocumentService} from "../../shared/services/document.service";
import {Document} from "../../shared/interfaces/document";

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {

  documents!:Document[];

  constructor(
    private documentService:DocumentService,
    private router: Router,
  ) {}
  ngOnInit():void {
    this.getData();
  }
  getData() {
    this.documentService.findAll().subscribe({
      next: (Response:Document[]) => this.documents = Response,
      error: (e) => console.error(e),
      complete: () => console.info("сработало")
    })
  }
  linkTo(id?: String) {
    if(id) {
      this.router.navigate([this.router.url, "document", id]);
    }
  }

}
