import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post.model';
import { User } from 'src/app/models/user.model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-author-profile',
  templateUrl: './author-profile.component.html',
  styleUrls: ['./author-profile.component.scss']
})
export class AuthorProfileComponent implements OnInit {
  authorId: string | null = ''
  author?: User
  posts: Post[] = []

  constructor(
    public route: ActivatedRoute,
    public postService: PostService,
    public location: Location,
  ) {

  }
  ngOnInit(): void {
    this.authorId = this.route.snapshot.paramMap.get('id')
    if(!this.authorId) return
    this.postService.getPostsByUserId(this.authorId).subscribe((res) => {
      this.posts = res
    })
    this.postService.getUserById(this.authorId).subscribe((res) => {
      this.author = res
    })
  }

  goBack() {
    this.location.back()
  }

}
