import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {StoragePlace} from "../../shared/interfaces/storage-place";
import {ActivatedRoute, Router} from "@angular/router";
import {RoleServiceService} from "../../shared/services/role-service.service";
import {Role} from "../../shared/interfaces/role";

@Component({
  selector: 'app-role-item',
  templateUrl: './role-item.component.html',
  styleUrls: ['./role-item.component.css']
})
export class RoleItemComponent implements OnInit {
  id: String | null = null;
  formGroup!: FormGroup;
  role!: Role;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private roleServiceService: RoleServiceService,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.getData();
    })
  }

  async getData() {
    const controls = {
      name: [null, [Validators.required, Validators.pattern("[A-Za-zА-Яа-яЁё]*")]],
    }
    this.formGroup = this.formBuilder.group(controls);
    if (this.id && this.id!= '') {
      this.roleServiceService.findById(this.id).subscribe({
        next: (Response: Role) => {
          this.role = Response
          this.formGroup.patchValue(this.role)
        },
        error: (e) => console.error(e),
        complete: () => console.info("сработало")
      })
    } else {
      this.formGroup.reset();
    }
  }
  async onAdd() {
    let storagePlace: StoragePlace = this.formGroup.value;


    if (this.id) {
      storagePlace.id = this.id;
      this.roleServiceService.updateObject(storagePlace).subscribe({
        next: (Response: Role) => {
          console.log(Response)
          this.router.navigate(['/roles']);
        },
        error: (e) => console.error(e),
        complete: () => console.info("сработало")
      })
    } else {
      this.roleServiceService.postObject(storagePlace).subscribe({
        next: (Response: Role) => {
          console.log(Response)
        },
        error: (e) => console.error(e),
        complete: () => console.info("сработало")
      })
    }
  }

  async onDelete() {
    if (this.id) {
      this.roleServiceService.deleteById(this.id).subscribe({
        next: (Response: Role) => {
          console.log(Response)
          this.router.navigate(['/roles']);
        },
        error: (e) => console.error(e),
        complete: () => console.info("сработало")
      })
    }
  }
  onReset() {
    this.formGroup.patchValue(this.role);
  }

}
