import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { IFilmList } from './film-list';
import { FilmListService } from './film-list.service';

@Component({
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css']
})
export class FilmDetailComponent implements OnInit {

  film: IFilmList;
  errorMessage: string;
  constructor(private _router: Router, private _route: ActivatedRoute, private _filmListService: FilmListService) { }
  ngOnInit() {
    const param = this._route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getFilm(id);
    }
  }
  getFilm(id: number) {
    this._filmListService.getFilm(id).subscribe(
      film => this.film = film,
      error => this.errorMessage = <any>error);
  }
  onBack(): void {
    this._router.navigate(['/films']);
  }
  onBuyTickets(): void {
    this._router.navigate(['/buy']);
  }
}
