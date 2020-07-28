import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewTempletComponent } from './new-templet/new-templet.component';
import { NewTableComponent } from './new-table/new-table.component';

@NgModule({
  declarations: [
    AppComponent,
    NewTempletComponent,
    NewTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
