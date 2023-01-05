import { FilmeCadastroComponent } from './filmes/paginas/filme-cadastro/filme-cadastro.component';
import { FilmeDetalhesComponent } from './filmes/paginas/filme-detalhes/filme-detalhes.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/paginas/home/home.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: '**',
    component: HomeComponent // Adicionar componente de erro padrão 404
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'filme',
    loadChildren: () =>
      import('./filmes/filmes.module').then((f) => f.FilmesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
