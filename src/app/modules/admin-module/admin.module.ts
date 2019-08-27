import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminRoutes } from './admin.routes';
import { AdminComponent } from './admin/admin.component';
import { MatModule } from '../mat-module/mat.module';

import { AdminService } from './admin.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutes,
    MatModule
  ],
  declarations: [
    AdminComponent
  ],
  providers: [
    AdminService
  ],
  exports: [
    AdminComponent
  ]
})
export class AdminModule{}