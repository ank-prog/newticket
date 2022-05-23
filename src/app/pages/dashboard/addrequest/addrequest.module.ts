import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddrequestRoutingModule } from './addrequest-routing.module';
import { AddrequestComponent } from './addrequest.component';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    AddrequestComponent
  ],
  imports: [
    CommonModule,
    AddrequestRoutingModule,
    TableModule
  ]
})
export class AddrequestModule { }
