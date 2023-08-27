import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, MatSidenavModule, MatButtonModule],
  exports: [NavbarComponent],
})
export class NavbarModule {}
