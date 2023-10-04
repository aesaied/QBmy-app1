import { Component, OnInit } from '@angular/core';
import { PostService } from '../Services/post.service';
import { Observable } from 'rxjs';
import { Post } from '../Models/post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts!: Observable<Post[]>;
  postList!: Post[];
  constructor(private postService: PostService) {

  }

  ngOnInit() {

    //this.posts = this.postService.getAll();


    this.postService.getAll().subscribe((data) => this.postList = data, (error) => {
      alert(JSON.stringify(error));

    });
    // this.postService.getAll().subscribe((data) => this.postList = data, (error) => {
    //   alert(JSON.stringify(error));

    // });

  }

}
