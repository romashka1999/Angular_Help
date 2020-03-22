import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-http-call',
  templateUrl: './http-call.component.html',
})
export class HttpCallComponent implements OnInit {

  loadedPosts: any = [];
  isFetching = false;

  constructor(private postsService: PostsService) {}

  ngOnInit() {}

  onCreatePost(postData: { title: string; body: string }) {
    // Send Http request
    this.postsService.createPost(postData).subscribe(responseData => {
      console.log(responseData);
    });
  }

  onFetchPosts() {
    this.isFetching = true;
    this.postsService.fetchPosts().subscribe( res => {
      this.isFetching = false;
      this.loadedPosts = res;
      console.log(this.loadedPosts);
    }, (error: any) => {
      console.error(error);
    })
  }

  onClearPosts() {
    this.loadedPosts = [];
  }

}
