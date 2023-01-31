import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from 'src/app/shared/services/auth-guard.service';


const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/homepage/homepage.module')
        .then((m) => m.HomepageModule),
  },
  {
    path: 'auth',
    // canActivate : []
    loadChildren: () =>
      import('./modules/user-auth/user-auth-routing.module')
        .then((m) => m.UserAuthRoutingModule),
  },
  {
    // canActivate: [AuthGuardService],
    path: "user",
    loadChildren: () => import('./modules/dashboard/dashboard-routing.module')
      .then((m) => m.DashboardRoutingModule)

  },
  {
    // canActivate: [AuthGuardService],
    path: "admin",
    loadChildren: () => import('./modules/admin/admin-routing.module')
      .then((m) => m.AdminRoutingModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
