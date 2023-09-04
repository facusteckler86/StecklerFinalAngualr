import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablasComponent } from './tablas.component';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [TablasComponent],
  imports: [CommonModule],
  exports: [TablasComponent],
})
export class TablasModule {}
