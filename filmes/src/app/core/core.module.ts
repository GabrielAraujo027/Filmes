import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared/shared.module';
import { HomeComponent } from './paginas/home/home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, SharedModule, HttpClientModule],
  exports: [HomeComponent],
})
export class CoreModule {}
