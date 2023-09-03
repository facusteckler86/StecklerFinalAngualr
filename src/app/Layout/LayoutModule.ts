import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MainWrapperComponent } from './main-wrapper/main-wrapper.component';
import {  MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { HomeModule } from './navbar/pages/home/home.module';
import { UsersModule } from './pages/users/users.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UsersComponent } from './pages/users/users.component';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [NavbarComponent, MainWrapperComponent,],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    HomeModule,
    UsersModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
  ],
  exports: [NavbarComponent, MainWrapperComponent],
})
export class LayoutModule {}
