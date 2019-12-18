import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { Observable } from 'rxjs';
import { IMovie } from '../movies-page/IMovie';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.scss']
})
export class MoviePageComponent implements OnInit {
  
  movie$: Observable<IMovie>;

  constructor(private route: ActivatedRoute, private movieService: MovieService) {


  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.movie$ = this.movieService.getMovie(parseInt(params.get('id')));
    });
  }

}
