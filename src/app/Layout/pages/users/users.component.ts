import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

    constructor(
      private matDialogos: MatDialog
    ){}

      onCreateUser(): void{
        const dialogRef = this.matDialogos.open(UsersComponent)

        dialogRef.afterClosed().subscribe({
          next:(v) => {
            if(v){console.log("Recibimos la info: ", v);
        } else { console.log("Se dio de baja")
        }
        },
      });

  }}
