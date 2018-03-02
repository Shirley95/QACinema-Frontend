import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { IFilmList } from './film-list';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';


@Injectable()
export class FilmListService {
  private _filmListUrl = 'http://localhost:8080/qacinema/api/showing';
  constructor(private _http: HttpClient) {}
  getShowing(): Observable<IFilmList[]> {
    return this._http.get<IFilmList[]>(this._filmListUrl)
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }
  getFilm(id: number): Observable<IFilmList> {
    return this.getShowing()
      .map((film: IFilmList[]) => film.find(f => f.id === id));
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }
}
