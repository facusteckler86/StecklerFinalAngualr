import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, MatCardModule],
  exports: [HomeComponent],
})
export class HomeModule {}
