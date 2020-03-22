import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



import { HttpCallComponent } from './http-call.component';
import { PostsService } from './posts.service';
import { AuthInterceptorService } from './auth-interceptor.service';
import { LoggingInterseptorService } from './logging-interceptor.service';

const routes: Routes = [
  {path:'', component: HttpCallComponent}
];

@NgModule({
  declarations: [
    HttpCallComponent
  ],
  providers: [
    PostsService,
    {provide: HTTP_INTERCEPTORS, useClass:AuthInterceptorService, multi: true}, // this will executed first   -- \ 
    {provide: HTTP_INTERCEPTORS, useClass:LoggingInterseptorService, multi: true} // this will executed second   --/   orders has meaning
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
})
export class HttpCallModule { }
