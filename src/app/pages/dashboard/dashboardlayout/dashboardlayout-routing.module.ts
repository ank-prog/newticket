import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardlayoutComponent } from './dashboardlayout.component';

const routes: Routes = [{ path: '', component: DashboardlayoutComponent ,
children:[
  { path: '',redirectTo:'dashboard',pathMatch:'full'},
{ path: 'ticketlist', loadChildren: () => import('../ticketlist/ticketlist.module').then(m => m.TicketlistModule) },
{ path: 'homepage', loadChildren: () => import('../homepage/homepage.module').then(m => m.HomepageModule)},
{ path: 'addrequest', loadChildren: () => import('../addrequest/addrequest.module').then(m => m.AddrequestModule) },
{ path: 'content', loadChildren: () => import('../content/content.module').then(m => m.ContentModule)},
]}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardlayoutRoutingModule { }
