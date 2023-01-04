import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmeResponse } from 'src/app/shared/models/responses/filme.response';
import { FilmesService } from 'src/app/shared/services/filmes.service';

@Component({
  selector: 'app-filme-detalhes',
  templateUrl: './filme-detalhes.component.html',
  styleUrls: ['./filme-detalhes.component.css'],
})
export class FilmeDetalhesComponent implements OnInit {
  filme!: FilmeResponse;

  constructor(
    private activatedRoute: ActivatedRoute,
    private filmesService: FilmesService
  ) {}

  ngOnInit(): void {
    const codigo: string = this.activatedRoute.snapshot.params['codigo'];
    this.recuperarFilme(codigo);
  }

  recuperarFilme(codigo: string) {
    this.filmesService.recuperarFilme(codigo).subscribe({
      next: (res: FilmeResponse) => {
        this.filme = res;
        console.log(this.filme);
      },
    });
  }
}
