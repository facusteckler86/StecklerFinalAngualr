import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MainWrapperComponent } from './main-wrapper/main-wrapper.component';
import { MatSidenavModule } from '@angular/material/sidenav';




@NgModule({
  declarations: [NavbarComponent, MainWrapperComponent],
  imports: [CommonModule, MatSidenavModule],
  exports: [NavbarComponent, MainWrapperComponent],
})
export class LayoutModule {}
