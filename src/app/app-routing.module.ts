import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './statics/not-found/not-found.component';

const routes: Routes = [
    {path:'', redirectTo: '/directives', pathMatch: 'full'},
    {path: 'directives', loadChildren: () => import('./modules/directives/directives.module').then( m => m.DirectivesModule)}, // lazy loading
    {path: 'services', loadChildren: () => import('./modules/services/services.module').then( m => m.ServicesModule)}, // lazy loading
    {path: 'routing', loadChildren: () => import('./modules/routing/routing.module').then( m => m.RoutingModule)}, // lazy loading
    {path: 'forms', loadChildren: () => import('./modules/forms/forms.module').then( m => m.FormsModulee)}, // lazy loading
    {path: 'pipes', loadChildren: () => import('./modules/pipes/pipes.module').then( m => m.PipesModule)}, // lazy loading
    {path: '**', component: NotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppROutingModule {

}