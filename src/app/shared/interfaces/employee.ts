import {Role} from "./role";

export interface Employee {

  id?: String,

  role:Role,

  surname:String,

  name:String,

  patronymic:String,

  email:String,

  password:String,

  telephoneNumber:String,
}
