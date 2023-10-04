import { Component, OnInit } from '@angular/core';
import { User } from '../Models/user';
import { PostService } from '../Services/post.service';
import { Observable } from 'rxjs';
import { Post } from '../Models/post';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {


  constructor(private postService: PostService, private router: Router) {

  }
  users!: Observable<User[]>

  ngOnInit() {

    this.users = this.postService.getAllUsers();

  }


  CreatePost(post: Post) {


    this.postService.create(post).subscribe((data) => {
      alert(JSON.stringify(data));

      this.router.navigate(['posts']);

    });

  }



}
