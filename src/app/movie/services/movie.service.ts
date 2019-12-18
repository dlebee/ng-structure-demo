import { Injectable } from '@angular/core';
import { IMovie } from '../pages/movies-page/IMovie';
import { of, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  _movies: IMovie[] = [
    {
      id: 1,
      name: "Bad Boys I"
    },
    {
      id: 2,
      name: "Bad Boys II"
    },
    {
      id: 3,
      name: "Bad Boys For life"
    }
  ];

  constructor() { }

  getMovies() {
    return of(this._movies);
  }

  getMovie(id: number) : Observable<IMovie> {

    const movie = this._movies.find(t => t.id == id);
    if (movie == null)
      return throwError('Could not find movie');
    return of(movie);
  }
}
