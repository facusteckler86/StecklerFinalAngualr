import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablasComponent } from './tablas.component';
import { MatTableModule } from '@angular/material/table';
import { UsersModule } from '../users.module';



@NgModule({
  declarations: [TablasComponent],
  imports: [CommonModule,UsersModule],
  exports: [TablasComponent],
})
export class TablasModule {}
