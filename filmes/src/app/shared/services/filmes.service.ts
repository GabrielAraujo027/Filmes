import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
import { FilmeResponse } from 'src/app/shared/models/responses/filme.response';
import { FilmeRequest } from '../models/requests/filme.request';

@Injectable({
  providedIn: 'root',
})
export class FilmesService {
  baseUrl = environment.apiBaseUrl;

  constructor(private readonly httpService: HttpClient) {}

  public listarFilmes(): Observable<FilmeResponse[]> {
    return this.httpService.get<FilmeResponse[]>(this.baseUrl);
  }

  public recuperarFilme(codigo: string): Observable<FilmeResponse> {
    return this.httpService.get<FilmeResponse>(
      `${environment.apiBaseUrl}/${codigo}`
    );
  }
  public cadastrarFilme(request: FilmeRequest): Observable<FilmeResponse> {
    request.Codigo = this.GerarId();
    return this.httpService.post<FilmeRequest>(this.baseUrl, request);
  }

  public GerarId(): string {
    const id = (Date.now() + Math.round(Math.random() * 1e8)).toString(36);
    return id;
  }
}
