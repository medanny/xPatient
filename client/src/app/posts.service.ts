import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {

  constructor(private _http: Http) {
  
  }
  
  getPosts() {
  	return this._http.get('/api/posts')
  		.map((response: Response) => response.json())
  		.do(data => console.log('All' + JSON.stringify(data)))
  }
  
  createPost (posts) {
  	let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

  	return this._http.post('/api/posts', JSON.stringify(posts), options)
  		.map((response: Response) => response.json())
  		.do(data => console.log('All' + JSON.stringify(data)))
  }

}
