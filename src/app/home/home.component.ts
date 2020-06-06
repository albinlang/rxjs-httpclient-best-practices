import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Observable } from 'rxjs';
import { Post } from '../post.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private postService: PostService) { }

  posts$: Observable<Post[]>;

  ngOnInit(): void {
    this.posts$ = this.postService.getPosts();
  }

}
