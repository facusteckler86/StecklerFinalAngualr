import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MainWrapperComponent } from './main-wrapper/main-wrapper.component';



@NgModule({
  declarations: [NavbarComponent, MainWrapperComponent],
  imports: [CommonModule],
  exports: [NavbarComponent,
    MainWrapperComponent],
})
export class LayoutModule {}
