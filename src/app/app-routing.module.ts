import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo:'login',pathMatch:'full'},
  { path: 'login', loadChildren: () => import('./pages/userManagement/login/login.module').then(m => m.LoginModule) },
  { path: 'register', loadChildren: () => import('./pages/userManagement/register/register.module').then(m => m.RegisterModule) },
  { path: 'forgotPassword', loadChildren: () => import('./pages/userManagement/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule) },
   { path: 'resetPassword', loadChildren: () => import('./pages/userManagement/reset-password/reset-password.module').then(m => m.ResetPasswordModule) },  { path: 'dashboardlayout', loadChildren: () => import('./pages/dashboard/dashboardlayout/dashboardlayout.module').then(m => m.DashboardlayoutModule) },
  { path: 'content', loadChildren: () => import('./pages/dashboard/content/content.module').then(m => m.ContentModule) },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
