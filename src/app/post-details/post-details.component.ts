import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../Services/post.service';
import { Post } from '../Models/post';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  post: Post | null = null;

  title = '';

  constructor(private route: ActivatedRoute, private postService: PostService, private router: Router) {

  }


  changeTitle() {
    this.title = this.post?.title ?? "NULL";
  }

  backToList() {
    this.router.navigate(['posts']);
  }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {

      var id = params.get('id');

      if (id) {

        this.postService.getById(Number(id)).subscribe((data) => {

          if (data.length > 0) {


            this.post = data[0];

            //alert(this.post.title);
            // this.post.id = data.id;
            // this.post.title = data!.title;
            // this.title = data.title;
            // this.post.body = data.body;
            // this.post.userId = data.userId;



          }

          else {

            //  if null 

            this.router.navigate(['posts']);

          }
        });

      }

    });

  }

}
