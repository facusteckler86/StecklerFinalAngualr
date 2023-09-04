import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogosComponent } from './dialogos/dialogos.component';
import { MatIconModule } from '@angular/material/icon';
import { TablasModule } from './tablas/tablas.module';
import { MatTableModule } from '@angular/material/table';




@NgModule({
  declarations: [UsersComponent, DialogosComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatIconModule,
    TablasModule,
    MatTableModule,
  ],
  exports: [UsersComponent, DialogosComponent],
})
export class UsersModule {}
