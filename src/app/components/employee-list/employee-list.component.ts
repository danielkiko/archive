import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Employee} from "../../shared/interfaces/employee";
import {EmployeeService} from "../../shared/services/employee.service";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees!:Employee[];

  constructor(
    private employeeService:EmployeeService,
    private router: Router,
  ) {}
  ngOnInit():void {
    this.getData();
  }
  getData() {
    this.employeeService.findAll().subscribe({
      next: (Response:Employee[]) => this.employees = Response,
      error: (e) => console.error(e),
      complete: () => console.info("сработало")
    })
  }
  linkTo(id?: String) {
    if(id) {
      this.router.navigate([this.router.url, "storagePlaceItem", id]);
    }
  }

}

