import {Component, OnInit} from '@angular/core';
import {FilmListService} from './film-list.service';
import {IFilmList} from './film-list';


@Component({
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})

export class FilmListComponent implements OnInit {
  errorMessage: string;
  films: IFilmList[] = [];
  constructor(private _filmListService: FilmListService) {}
  ngOnInit(): void {
    this._filmListService.getShowing()
      .subscribe(films => {
        this.films = films;
      },
        error => this.errorMessage = <any>error);
  }

}
