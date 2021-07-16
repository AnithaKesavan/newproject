import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../dashboard/dashboard.component'
import { TableComponent } from '../table/table.component'
import { LayoutRoutingModule } from './layout-routing.module';
import { RouterModule } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@NgModule({
  declarations: [
    DashboardComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    RouterModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class LayoutmoduleModule { }
