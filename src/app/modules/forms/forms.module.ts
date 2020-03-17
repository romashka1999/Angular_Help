import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MainComponent } from './main/main.component';
import { TemplateDrivenComponent } from './main/template-driven/template-driven.component';
import { ReactiveComponent } from './main/reactive/reactive.component';


const routes: Routes = [
  {path: '', component: MainComponent, children: [
    {path: 'templateDriven', component: TemplateDrivenComponent},
    {path: 'reactive', component: ReactiveComponent}
  ]}
]

@NgModule({
  declarations: [MainComponent, TemplateDrivenComponent, ReactiveComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class FormsModulee { }
