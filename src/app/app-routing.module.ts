import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/homepage/homepage.module')
        .then((m) => m.HomepageModule),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/user-auth/user-auth-routing.module')
        .then((m) => m.UserAuthRoutingModule),
  },
  {
    path: "dashboard",
    loadChildren: () => import('./modules/dashboard/dashboard-routing.module')
      .then((m) => m.DashboardRoutingModule)
  },
  {
    path: "admin",
    loadChildren: () => import('./modules/admin/admin-routing.module')
      .then((m) => m.AdminRoutingModule)
  },
  {
    path: '**', redirectTo: '/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { } 
