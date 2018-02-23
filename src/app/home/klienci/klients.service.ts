import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class KlientsService {

  private key = localStorage.getItem('key');
  private httpOptions2 = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'x-access-token': this.key })
  };

  constructor(private http: HttpClient) {}

  postKlientDt(param): Observable<any> {
    const body = JSON.stringify(param);
    return this.http.post('/api/klientdt', body, this.httpOptions2);
  }

  getKlient(id): Observable<any> {
    return this.http.get('/api/klient/' + id, this.httpOptions2);
    // return this.http.get('/api/klient/' + id, this.httpOptions2);
  }

  createKlient(klient) {
    const body = JSON.stringify(klient);
    return this.http.post('/api/klient_new', body, this.httpOptions2);
  }

  updateKlient(klient, id) {
    const body = JSON.stringify(klient);
    return this.http.put('/api/klient/' + id, body, this.httpOptions2);
  }

  deleteKlient(id) {
    return this.http.delete('/api/klient/' + id, this.httpOptions2);
  }

}
