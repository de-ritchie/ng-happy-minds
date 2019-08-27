import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SearchComponent } from './search/search.component';
import { LogoutComponent } from './logout.component';

import { AuthGuardService } from './shared/services/auth-guard.service';
import { GuestGuardService } from './shared/services/guest-guard.service';

const routes: Routes = [
  {
    path: '',
    component: SearchComponent,
    canActivate: [ GuestGuardService ],
    pathMatch: 'full'
  },
  {
    path: 'login',
    canActivate: [ GuestGuardService ],
    loadChildren: () => import('./modules/login-module/login.module').then( mod => mod.LoginModule)
  },
  {
    path: 'browse',
    canActivate: [ GuestGuardService ],
    loadChildren: () => import('./modules/browse-module/browse.module').then( mod => mod.BrowseModule)
  },
  {
    path: 'admin',
    canActivate: [ AuthGuardService ],
    loadChildren: () => import('./modules/admin-module/admin.module').then( mod => mod.AdminModule)
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouter{ }