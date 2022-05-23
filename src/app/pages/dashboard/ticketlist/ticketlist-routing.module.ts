import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketlistComponent } from './ticketlist.component';

const routes: Routes = [{ path: '', component: TicketlistComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketlistRoutingModule { }
