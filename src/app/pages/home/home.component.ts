import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pageIndex: number = 0
  pageSize: number = 10
  posts: Post[] = []
  allPosts: Post[] = []
  titles: string[] = []
  search: string = ''

  constructor(
    public postService: PostService,
    public userService: UserService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.getAllPosts()
  }

  changePages(event: PageEvent): void {
    const offset = event.pageSize * (event.pageIndex + 1)
    this.posts = this.allPosts.slice(offset - event.pageSize, offset)
  }

  handleSearchPosts() {
    if (this.search.trim() === '') {
      this.search = ""
      this.getAllPosts()
      return
    }
    this.postService.getPostsByTitle(this.search.toLowerCase()).subscribe((res) => {
      this.handlePosts(res)
    })
  }

  handlePosts(posts: Post[]) {
    this.allPosts = posts
    this.posts = this.allPosts.slice(0, this.pageSize)
  }

  getAllPosts() {
    this.postService.getPosts().subscribe((res) => {
      this.handlePosts(res)
    })
  }

}