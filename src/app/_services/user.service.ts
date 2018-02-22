import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { User } from '../_models/index';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }


   /* getAll() {
      const  key = localStorage.getItem('key');
      const httpOptions2 = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json', 'x-access-token': key })
      };

      return this.http.get('http://localhost:3000/users', httpOptions2);
    }

    getById(id: number) {
        return this.http.get('/api/users/' + id);
    }

    create(user: User) {
     // console.log(user['firstName']);
      // const body = JSON.stringify(user);
      return this.http.post('http://localhost:3000/api/auth/register', user, httpOptions);
    }

    update(user: User) {
        return this.http.put('/api/users/' + user.id, user);
    }

    delete(id: number) {
        return this.http.delete('/api/users/' + id);
    }*/
}
