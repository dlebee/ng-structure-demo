import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';
import { MoviesPageComponent } from './pages/movies-page/movies-page.component';
import { MoviePageComponent } from './pages/movie-page/movie-page.component';


@NgModule({
  declarations: [MoviesPageComponent, MoviePageComponent],
  imports: [
    CommonModule,
    MovieRoutingModule
  ]
})
export class MovieModule { }
