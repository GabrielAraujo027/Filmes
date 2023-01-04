import { FilmesService } from './../../../shared/services/filmes.service';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filme-cadastro',
  templateUrl: './filme-cadastro.component.html',
  styleUrls: ['./filme-cadastro.component.css'],
})
export class FilmeCadastroComponent implements OnInit {
  filmeForm!: FormBuilder;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly filmeService: FilmesService
  ) {}

  ngOnInit(): void {
    this.filmeForm = this.formBuilder.group({
      Codigo: ['', [Validators.required]],
      Titulo: ['', [Validators.required]],
      Sinopse: ['', [Validators.required]],
      AvaliacaoDaCritica: ['', [Validators.required]],
      Genero: ['', [Validators.required]],
      DuracaoEmSegundos: ['', [Validators.required]],
      ClassificacaoIndicativa: ['', [Validators.required]],
      DataDeLancamento: ['', [Validators.required]],
      LinkCapa: ['', [Validators.required]],
    });
  }
}
