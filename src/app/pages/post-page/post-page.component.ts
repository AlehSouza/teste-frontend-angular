import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Comment } from 'src/app/models/comment.model';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {
  postId: string | null = '';
  post?: Post;
  comments: Comment[] = []

  constructor(
    public route: ActivatedRoute,
    public postService: PostService,
    public userService: UserService,
    public location: Location,
  ) { }

  ngOnInit(): void {
    this.postId = this.route.snapshot.paramMap.get('id')
    if (!this.postId) return
    this.getPost()
    this.getComments()
  }

  getPost() {
    if (!this.postId) return
    this.postService.getPostById(this.postId).subscribe((post) => {
      this.post = post
    })
  }

  getComments() {
    if (!this.postId) return
    this.postService.getCommentsById(this.postId).subscribe((comments) => {
      this.comments = comments
    })
  }

  goBack() {
    this.location.back()
  }

  getAuthor(id: number) {
    const author = this.userService.allUsers.get(id)
    return author?.name
  }
}
