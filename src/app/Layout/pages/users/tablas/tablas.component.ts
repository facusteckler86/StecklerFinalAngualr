import { Component, Input } from '@angular/core';
import { Users } from '../models';
import { UsersComponent } from '../users.component';


// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

// usuario de prueba

// const ELEMENT_DATA: Users[] = [
//   {
//     id: 1,
//     name: 'Facundo',
//     surname: 'Steckler',
//     email: 'facundomsteckler@gmail.com',
//     password: 'qwerty123',
//   },
// ];

@Component({
  selector: 'app-tablas',
  templateUrl: './tablas.component.html',
  styleUrls: ['./tablas.component.scss'],
})

export class TablasComponent {
  displayedColumns: string[] = ['id', 'fullName', 'email'];
  @Input()
  dataSource: Users [] = [];
}
