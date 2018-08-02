import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  uri="http://localhost:4000"
  constructor(private http:HttpClient) { }

  getMovies(){
    return this.http.get(`${this.uri}/storefront/movies`) 
  }

  getMovieById(id){
    return this.http.get(`${this.uri}/movies/details/${id}`)
  }

  sessionData(){
    return this.http.get(`${this.uri}`)
  }

  addToCart(id){
    return this.http.get(`${this.uri}/add-to-cart/${id}`)
  }
}