import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, inject } from '@angular/core';
import { Post } from '../Models/post';
import { Observable } from 'rxjs';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(@Inject('API_URL') private apiUrl: string, private http: HttpClient) {

  }

  getAll(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl + 'posts');
  }

  getById(id: number): Observable<Post[]> {

    return this.http.get<Post[]>(this.apiUrl + 'posts', { params: { id: id } });
  }


  getAllUsers(): Observable<User[]> {

    return this.http.get<User[]>(this.apiUrl + 'users');

  }


  create(post: Post) {

    return this.http.post(this.apiUrl + 'posts', JSON.stringify(post));
  }
}
