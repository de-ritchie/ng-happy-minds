import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { BrowseComponent } from './browse/browse.component';

let browseRoutes: Routes = [
  {
    path: '',
    component: BrowseComponent,
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(browseRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class BrowseRoutes{}