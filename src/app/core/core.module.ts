import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    BrowserModule
  ],
  exports: [
    HeaderComponent,
    NavbarComponent,
    NotFoundComponent,
    HttpClientModule,
    BrowserModule
  ]
})
export class CoreModule { }
