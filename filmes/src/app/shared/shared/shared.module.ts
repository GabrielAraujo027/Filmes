import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmeCardComponent } from '../components/filme-card/filme-card.component';

@NgModule({
  declarations: [FilmeCardComponent],
  imports: [CommonModule, HttpClientModule, RouterModule],
  exports: [FilmeCardComponent],
})
export class SharedModule {}
