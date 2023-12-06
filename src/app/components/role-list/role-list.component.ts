import {Component, OnInit} from '@angular/core';
import {Role} from "../../shared/interfaces/role";
import {RoleServiceService} from "../../shared/services/role-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.css']
})
export class RoleListComponent implements OnInit {

  roles!:Role[];

  constructor(
    private roleService:RoleServiceService,
    private router: Router,
  ) {}
  ngOnInit():void {
    this.getData();
  }
getData() {
    this.roleService.findAll().subscribe({
      next: (roleResponse:Role[]) => this.roles = roleResponse,
      error: (e) => console.error(e),
      complete: () => console.info("сработало")
    })
}
  linkToRole(id?: String) {
    if(id) {
      this.router.navigate([this.router.url, "role", id]);
    }
  }

}
