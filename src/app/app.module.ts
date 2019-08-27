import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatModule } from './modules/mat-module/mat.module';

import { AppRouter } from './app.router';

import { AppComponent } from './app.component';
import { LogoutComponent } from './logout.component';
import { SearchComponent } from './search/search.component';
import { ResultComponent } from './search/result/result.component';

import { AuthGuardService } from './shared/services/auth-guard.service';
import { GuestGuardService } from './shared/services/guest-guard.service';
import { SearchService } from './search/search.service';

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatModule,
    AppRouter
  ],
  declarations: [ 
    AppComponent,
    LogoutComponent,
    SearchComponent,
    ResultComponent
  ],
  providers: [
    GuestGuardService,
    AuthGuardService,
    SearchService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }