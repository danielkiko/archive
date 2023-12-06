import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { DocumentListComponent } from './components/document-list/document-list.component';
import { DocumentItemComponent } from './components/document-item/document-item.component';
import { DocumentTypeItemComponent } from './components/document-type-item/document-type-item.component';
import { DocumentTypeListComponent } from './components/document-type-list/document-type-list.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeItemComponent } from './components/employee-item/employee-item.component';
import { RoleListComponent } from './components/role-list/role-list.component';
import { RoleItemComponent } from './components/role-item/role-item.component';
import { StoragePlaceItemComponent } from './components/storage-place-item/storage-place-item.component';
import { StoragePlaceListComponent } from './components/storage-place-list/storage-place-list.component';
import { ArchiveDocumentItemComponent } from './components/archive-document-item/archive-document-item.component';
import { ArchiveDocumentListComponent } from './components/archive-document-list/archive-document-list.component';
import { LayoutComponent } from './components/layout/layout.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DocumentListComponent,
    DocumentItemComponent,
    DocumentTypeItemComponent,
    DocumentTypeListComponent,
    EmployeeListComponent,
    EmployeeItemComponent,
    RoleListComponent,
    RoleItemComponent,
    StoragePlaceItemComponent,
    StoragePlaceListComponent,
    ArchiveDocumentItemComponent,
    ArchiveDocumentListComponent,
    LayoutComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
