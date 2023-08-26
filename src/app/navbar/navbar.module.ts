import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { MatSidenavModule } from '@angular/material/sidenav';



@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, MatSidenavModule],
  exports: [NavbarComponent],
})
export class NavbarModule {}
