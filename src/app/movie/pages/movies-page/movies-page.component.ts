import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IMovie } from './IMovie';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.scss']
})
export class MoviesPageComponent implements OnInit {



  constructor(private movieService: MovieService) { 

    
  }

  ngOnInit() {
  }

  get movies$() : Observable<IMovie[]> {
    return this.movieService.getMovies();
  }
}
