import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from "ngx-spinner";
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  imports: [
    RouterModule,
    FormsModule,
    CommonModule,
    NgxSpinnerModule,
    NgxPaginationModule
  ],
  exports: [
    RouterModule,
    FormsModule,
    CommonModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    NgxPaginationModule
  ],
})
export class SharedModule { }
