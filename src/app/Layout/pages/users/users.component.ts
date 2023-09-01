import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  nameControl =  new FormControl(null, Validators.required);
  surnameControl = new FormControl(null, Validators.required);
  emailControl = new FormControl(null, Validators.email);
  passwordControl = new FormControl(null,Validators.required);

  userForm = new FormGroup({
    name: this.nameControl,
    surname: this.surnameControl,
    email: this.emailControl,
    password: this.passwordControl,

  });
}
