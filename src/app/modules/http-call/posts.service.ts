import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable()
export class PostsService {
    private baseUrl: string = 'http://jsonplaceholder.typicode.com';

    constructor(private http: HttpClient) {}

    public createPost(postData): Observable<any> {
        return this.http.post(this.baseUrl + '/posts',postData, {
            responseType: 'json',
            observe: 'response' // what kind of data we want to get, from server
        });
    }

    public fetchPosts(): Observable<any> {

        return this.http
        .get(this.baseUrl + '/posts', {
            headers: new HttpHeaders({"custom-header": "olaaa"}),
            params: new HttpParams().append('roma', '20').append('ki', 'egaa')
        })
        .pipe(map((posts: any) => {
            const postsArr = [];
            for(let post of posts) {
                const postObj = {
                title: post['title'],
                body: post['body']
                }
                postsArr.push(postObj);
            }
            return postsArr;
        }));
    }
}