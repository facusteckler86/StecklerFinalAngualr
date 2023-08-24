import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LayoutModule } from './Layout/layout.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,
    AppRoutingModule,
    FormsModule,
    LayoutModule,],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
