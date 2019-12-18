import { NgModule, Injectable } from '@angular/core';
import { Routes, RouterModule, CanLoad, UrlSegment, Route, CanActivate } from '@angular/router';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
class CanLoadAboutService implements CanLoad {

  constructor() {

  }

  canLoad(route: Route, segments: UrlSegment[]): boolean | Observable<boolean> | Promise<boolean> {
    return of(false);
  } 

  
}


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import ('./home/home.module').then(t => t.HomeModule)
  },
  {
    path: 'about',
    loadChildren: () => import ('./about/about.module').then(t => t.AboutModule),
    //canLoad: [CanLoadAboutService]
  },
  {
    path: 'movies',
    loadChildren: () => import ('./movie/movie.module').then(t => t.MovieModule),
    //canLoad: [CanLoadAboutService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
