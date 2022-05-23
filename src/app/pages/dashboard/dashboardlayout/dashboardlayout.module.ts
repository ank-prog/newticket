import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardlayoutRoutingModule } from './dashboardlayout-routing.module';
import { DashboardlayoutComponent } from './dashboardlayout.component';


@NgModule({
  declarations: [
    DashboardlayoutComponent
  ],
  imports: [
    CommonModule,
    DashboardlayoutRoutingModule
  ]
})
export class DashboardlayoutModule { }
