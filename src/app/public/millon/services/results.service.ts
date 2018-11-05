import { Injectable } from '@angular/core';
import {Results} from '../models/results.models';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {

  // results: Results;
  constructor(public _http: HttpClient) {}

  get(): Observable<Results> {
      const url = 'https://www.magayo.com/api/results.php?api_key=Qs538dw5akaBasBmLd&game=euromillions';
      const headers = this.createHeadersObject();
      return this._http.get<Results>(url, {headers: headers});
  }

  getOtherService(): Observable<Results> {
    // const url = 'http://localhost:8088/get_results';
    const url = 'https://euromillions-backend.herokuapp.com/get_results';
    const headers = this.createHeadersObject();
    return this._http.get<Results>(url, {headers: headers});
  }

  createHeadersObject() {
    return new HttpHeaders(
      {
        'Content-Type': 'application/json; charset=utf-8',
      });
  }
}
