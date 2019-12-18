import { NgModule, Injectable } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { Observable, of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
class CanActivateAboutService implements CanActivate
{
  canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    return of(false);
  }
  
}

const routes: Routes = [
  {
    path: '',
    component: AboutPageComponent
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
