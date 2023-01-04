import { ReactiveFormsModule } from '@angular/forms';
import { FilmeDetalhesComponent } from './paginas/filme-detalhes/filme-detalhes.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmesRoutingModule } from './filmes-routing.module';
import { SharedModule } from '../shared/shared/shared.module';

@NgModule({
  declarations: [FilmeDetalhesComponent],
  imports: [
    CommonModule,
    FilmesRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class FilmesModule {}
