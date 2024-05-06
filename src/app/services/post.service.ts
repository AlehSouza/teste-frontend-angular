import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';
import { Comment } from '../models/comment.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  url = 'https://jsonplaceholder.typicode.com'

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.url}/posts`)
  }

  getPostsByUserId(id: string): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.url}/posts?userId=${id}`)
  }

  getPostById(id: string): Observable<Post> {
    return this.http.get<Post>(`${this.url}/posts/${id}`)
  }

  getCommentsById(id: string): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.url}/posts/${id}/comments`)
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}/users`)
  }

  getUserById(id: string): Observable<User> {
    return this.http.get<User>(`${this.url}/users/${id}`)
  }

  getPostsByTitle(title: string): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.url}/posts?title=${title}`)
  }

}
