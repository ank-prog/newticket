import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { TicketlistRoutingModule } from './ticketlist-routing.module';
import { TicketlistComponent } from './ticketlist.component';


@NgModule({
  declarations: [
    TicketlistComponent
  ],
  imports: [
    CommonModule,
    TicketlistRoutingModule,
    DataTablesModule
  ]
})
export class TicketlistModule { }
