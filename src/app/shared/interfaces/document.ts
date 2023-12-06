import {DocumentType} from "./document-type";


export interface Document {

  id?: String,

  name: String,

  documentType:DocumentType,

  content:String,

  creationDate:Date,

  expirationDate:Date,
}
