import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [],
  imports: [
    RouterModule,
    FormsModule,
    CommonModule
  ],
  exports: [
    RouterModule,
    FormsModule,
    CommonModule,
    NoopAnimationsModule,
    BrowserAnimationsModule
  ]
})
export class SharedModule { }
