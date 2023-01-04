import { Component, OnInit, Input } from '@angular/core';
import { FilmeResponse } from '../../models/responses/filme.response';

@Component({
  selector: 'app-filme-card',
  templateUrl: './filme-card.component.html',
  styleUrls: ['./filme-card.component.css'],
})
export class FilmeCardComponent implements OnInit {
  @Input()
  public filme!: FilmeResponse;

  constructor() {}

  ngOnInit(): void {}
}
