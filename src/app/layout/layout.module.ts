import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component';
import { DefaultComponent } from './components/default/default.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [NavigationComponent, DefaultComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [DefaultComponent]
})
export class LayoutModule { }
