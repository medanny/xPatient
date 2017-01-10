import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers: [PostsService]
})

export class PostsComponent implements OnInit {
	posts = [];
	postBody = "";
	
	constructor (private _postsService: PostsService) { 
	
	}

	ngOnInit() {
		this.updatePosts();
	}
  	
  	addPost() {
  		this._postsService.createPost({
  			username : 'daniel',
  			body : this.postBody
  		}).subscribe( 
			post => {
                this.posts.unshift(post);
                this.postBody = "";
            },
  			error => {
				console.log(error)
			});
	}

	deletePost(id) {
		this._postsService.deletePost(id).subscribe(
			msg => {
				console.log(msg);
				this.updatePosts();
			},
		  	error => { 
			  console.log(error)
			});
	}

	updatePosts() {
		this._postsService.getPosts().subscribe(
			posts => {
                this.posts = posts;
            },
  			error => {
			  console.log(error)
			});
	}
}
