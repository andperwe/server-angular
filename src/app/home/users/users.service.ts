import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Router} from "@angular/router";

@Injectable()
export class UsersService {

  private key = localStorage.getItem('key');
  private httpOptions2 = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'x-access-token': this.key })
  };

  constructor(
               private http: HttpClient
              ) {}

  postUserDt(param): Observable<any> {
      const body = JSON.stringify(param);
      return this.http.post('/api/userdt', body, this.httpOptions2);
  }

  getUser(id): Observable<any> {
    return this.http.get('/api/user/' + id, this.httpOptions2);
  }

  createUser(user) {
    const body = JSON.stringify(user);
    return this.http.post('/api/user_new', body, this.httpOptions2);
  }

  updateUser(user, id) {
    const body = JSON.stringify(user);
    return this.http.put('/api/user/' + id, body, this.httpOptions2);
  }

  deleteUser(id) {
    return this.http.delete('/api/user/' + id, this.httpOptions2);
  }
}
