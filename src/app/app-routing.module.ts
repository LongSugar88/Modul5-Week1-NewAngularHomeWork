import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewTableComponent} from "./new-table/new-table.component";

const routes: Routes = [
  {path: 'longdeptrai', component: NewTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
