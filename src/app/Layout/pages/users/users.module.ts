import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';



@NgModule({
  declarations: [UsersComponent],
  imports: [CommonModule, MatInputModule,MatFormFieldModule],
  exports: [UsersComponent],
})
export class UsersModule {}
