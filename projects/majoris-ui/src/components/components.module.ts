import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MjsButtonComponent } from './mjs-button/mjs-button.component';

@NgModule({
  declarations: [
    MjsButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MjsButtonComponent
  ]
})
export class ComponentsModule { }
