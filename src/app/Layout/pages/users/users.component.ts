import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Users } from './models';

const ELEMENT_DATA: Users[] = [
  {
    id: 1,
    name: 'Facundo',
    surname: 'Steckler',
    email: 'facundomsteckler@gmail.com',
    password: 'qwerty123',
  },
];

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

    public users: Users[] = ELEMENT_DATA;

    constructor(
      private matDialogos: MatDialog
    ){}

      onCreateUser(): void{
        const dialogRef = this.matDialogos.open(UsersComponent)

        dialogRef.afterClosed().subscribe({
          next:(v) => {
            if(v){
              this.users = [
                ...this.users,
                {
                  id: this.users.length + 1,
                  name: v.name,
                  surname: v.surname,
                  email: v.email,
                  password: v.password,
                },
              ];

              console.log("Recibimos la info: ", v);
        } else { console.log("Se dio de baja")
        }
        },
      });

  }}
