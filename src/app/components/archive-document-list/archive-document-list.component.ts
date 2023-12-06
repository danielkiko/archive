import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ArchiveDocument} from "../../shared/interfaces/archive-document";
import {ArchiveDocumentService} from "../../shared/services/archive-document.service";

@Component({
  selector: 'app-archive-document-list',
  templateUrl: './archive-document-list.component.html',
  styleUrls: ['./archive-document-list.component.css']
})
export class ArchiveDocumentListComponent implements OnInit {

  archiveDocuments!:ArchiveDocument[];

  constructor(
    private archiveDocumentService:ArchiveDocumentService,
    private router: Router,
  ) {}
  ngOnInit():void {
    this.getData();
  }
  getData() {
    this.archiveDocumentService.findAll().subscribe({
      next: (Response:ArchiveDocument[]) => this.archiveDocuments = Response,
      error: (e) => console.error(e),
      complete: () => console.info("сработало")
    })
  }
  linkTo(id?: String) {
    if(id) {
      this.router.navigate([this.router.url, "archiveDocument", id]);
    }
  }


}
