import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { PipesComponent } from './pipes.component';
import { ShortenPipe } from './shorten.pipe';
import { FilterPipe } from './filter.pipe';
import { SortPipe } from './sort.pipe';


const routes: Routes = [
  {path: '', component: PipesComponent}
]

@NgModule({
  declarations: [PipesComponent, ShortenPipe, FilterPipe, SortPipe],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class PipesModule { }
