import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DirectivesComponent } from './directives.component';
import { BasicHighlightDirective } from './basic-highlight.directive';
import { BestterHighlightDirective } from './better-highlight.directive';
import { UnlessDirective } from './unless.directive';

const routes: Routes = [
  {path: '', component: DirectivesComponent}
];

@NgModule({
  declarations: [
    DirectivesComponent,
    BasicHighlightDirective,
    BestterHighlightDirective,
    UnlessDirective
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DirectivesModule { }
