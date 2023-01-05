import { FilmeCadastroComponent } from './paginas/filme-cadastro/filme-cadastro.component';
import { FilmeDetalhesComponent } from './paginas/filme-detalhes/filme-detalhes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'filme-cadastro',
    component: FilmeCadastroComponent,
  },
  {
    path: ':codigo',
    component: FilmeDetalhesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilmesRoutingModule {}
