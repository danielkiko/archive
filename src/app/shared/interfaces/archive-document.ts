import {Employee} from "./employee";
import {StoragePlace} from "./storage-place";
import {Document} from "./document";

export interface ArchiveDocument {

  id?: String,

  document:Document,

  employee:Employee,

  storagePlace:StoragePlace,

  creationDate:Date,

  expirationDate:Date,

}
