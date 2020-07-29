import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewTempletComponent } from './new-templet/new-templet.component';
import { NewTableComponent } from './new-table/new-table.component';
import { NewGroupComponent } from './new-group/new-group.component';

@NgModule({
  declarations: [
    AppComponent,
    NewTempletComponent,
    NewTableComponent,
    NewGroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
