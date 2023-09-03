import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogos',
  templateUrl: './dialogos.component.html',
  styleUrls: ['./dialogos.component.scss'],
})
export class DialogosComponent {

  nameControl = new FormControl(null, Validators.required);
  surnameControl = new FormControl(null, Validators.required);
  emailControl = new FormControl(null, Validators.email);
  passwordControl = new FormControl(null, Validators.required);

  userForm = new FormGroup({
    name: this.nameControl,
    surname: this.surnameControl,
    email: this.emailControl,
    password: this.passwordControl,
  });

    constructor(private dialogRef: MatDialogRef<DialogosComponent>){}

  onSubmit(): void {
      if(this.userForm.invalid){
          this.userForm.markAllAsTouched();
      }else[
          this.dialogRef.close(this.userForm.value)
      ]

  }

}
