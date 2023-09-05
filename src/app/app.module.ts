import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LayoutModule } from './Layout/LayoutModule';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TablasComponent } from './Layout/pages/users/tablas/tablas.component';
import { FullNamePipe } from './shared/pipes/full-name.pipe';



@NgModule({
  declarations: [AppComponent, FullNamePipe],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LayoutModule,
    BrowserAnimationsModule,


  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
