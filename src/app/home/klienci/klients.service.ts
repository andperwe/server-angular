import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient, HttpHeaders} from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class KlientsService {

  constructor(private http: HttpClient) {}

  postKlientDt(param): Observable<any> {
    const body = JSON.stringify(param);
    const  key = localStorage.getItem('key');
    const httpOptions2 = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'x-access-token': key })
    };
    return this.http.post('/api/klientdt', body, httpOptions2);
  }

  getKlient(id): Observable<any> {
    const  key = localStorage.getItem('key');
    const httpOptions2 = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'x-access-token': key })
    };
    return this.http.get('/api/klient/' + id, httpOptions2);
  }

  createKlient(klient) {
    const body = JSON.stringify(klient);
    const  key = localStorage.getItem('key');
    const httpOptions2 = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'x-access-token': key })
    };
    return this.http.post('/api/klient_new', body, httpOptions2);
  }

  updateKlient(klient, id) {
    const body = JSON.stringify(klient);
    return this.http.put('/api/klient/' + id, body, httpOptions);
  }

  deleteKlient(id) {
    return this.http.delete('/api/klient/' + id, httpOptions);
  }

}
