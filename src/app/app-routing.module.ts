import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from "./components/layout/layout.component";
import {ArchiveDocumentListComponent} from "./components/archive-document-list/archive-document-list.component";
import {ArchiveDocumentItemComponent} from "./components/archive-document-item/archive-document-item.component";
import {DocumentListComponent} from "./components/document-list/document-list.component";
import {DocumentItemComponent} from "./components/document-item/document-item.component";
import {DocumentTypeListComponent} from "./components/document-type-list/document-type-list.component";
import {DocumentTypeItemComponent} from "./components/document-type-item/document-type-item.component";
import {EmployeeListComponent} from "./components/employee-list/employee-list.component";
import {EmployeeItemComponent} from "./components/employee-item/employee-item.component";
import {RoleListComponent} from "./components/role-list/role-list.component";
import {RoleItemComponent} from "./components/role-item/role-item.component";
import {StoragePlaceListComponent} from "./components/storage-place-list/storage-place-list.component";
import {StoragePlaceItemComponent} from "./components/storage-place-item/storage-place-item.component";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [

      {
        path:'',
        component: ArchiveDocumentListComponent,
      },
      {
        path:'archiveDocuments',
        component: ArchiveDocumentListComponent,
      },
      {
        path:'archiveDocuments/document',
        component: ArchiveDocumentItemComponent,
      },
      {
        path:'archiveDocuments/document/:id',
        component: ArchiveDocumentItemComponent,
      },
      {
        path:'documents',
        component: DocumentListComponent,
      },
      {
        path:'documents/document',
        component: DocumentItemComponent,
      },
      {
        path:'documents/document/"id',
        component: DocumentItemComponent, //заменить на форм компонент
      },
      {
        path:'documentTypes',
        component: DocumentTypeListComponent,
      },
      {
        path:'documentTypes/documentType',
        component: DocumentTypeItemComponent,
      },
      {
        path:'documentTypes/documentType/:id',
        component: DocumentTypeItemComponent,
      },
      {
        path:'employees',
        component: EmployeeListComponent,
      },
      {
        path:'employees/employee',
        component: EmployeeItemComponent,
      },
      {
        path:'employees/employee/:id',
        component: EmployeeItemComponent,
      },
      {
        path:'roles',
        component: RoleListComponent,
      },
      {
        path:'roles/role',
        component: RoleItemComponent,
      },
      {
        path:'roles/role/:id',
        component: RoleItemComponent,
      },
      {
        path:'storagePlaces',
        component: StoragePlaceListComponent,
      },
      {
        path:'storagePlaces/storagePlace',
        component: StoragePlaceItemComponent,
      },
      {
        path:'storagePlaces/storagePlace/:id',
        component: StoragePlaceItemComponent,
      },

    ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
