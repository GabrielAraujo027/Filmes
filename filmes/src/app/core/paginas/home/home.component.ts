import { Component, Input, OnInit } from '@angular/core';
import { FilmeRequest } from 'src/app/shared/models/requests/filme.request';
import { ClassificacaoIndicativa } from 'src/app/shared/models/responses/classificacao-indicativa.response';
import { FilmeResponse } from 'src/app/shared/models/responses/filme.response';
import { FilmesService } from 'src/app/shared/services/filmes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public filme!: FilmeResponse;
  public classificacoes!: ClassificacaoIndicativa;

  public filmes!: Array<FilmeResponse>;

  constructor(private readonly filmesService: FilmesService) {}

  codigo!: number;

  ngOnInit(): void {
    this.filmesService.listarFilmes().subscribe((filmes) => {
      this.filmes = filmes;
    });
  }
}
