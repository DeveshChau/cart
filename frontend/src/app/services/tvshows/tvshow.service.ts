import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TvshowService {

  uri="http://localhost:4000"
  constructor(private http:HttpClient) { }

  getTvShows(){
    return this.http.get(`${this.uri}/storefront/tvshows`)
  }
}
