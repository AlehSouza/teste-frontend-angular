import { Injectable } from '@angular/core';
import { PostService } from './post.service';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  allUsers = new Map()

  constructor(private postService: PostService) {
    this.postService.getUsers().subscribe((users) => {
      users.forEach(user => {
        this.allUsers.set(user.id, user)
      });
    })
  }
}
