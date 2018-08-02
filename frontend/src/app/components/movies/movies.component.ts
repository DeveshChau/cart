import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie/movie.service';
import { Movie } from '../../models/movie.model'
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  providers:[MovieService]
})
export class MoviesComponent implements OnInit {

  movies: Movie[]
  cart:any

  constructor(private movieService: MovieService, private router:Router) { }

  ngOnInit() {
    this.fetchMovies()
  }

  fetchMovies(){
    this.movieService.getMovies().subscribe((data:Movie[])=>{
      this.movies = data
    })
  }

  sessionData(){
    this.movieService.sessionData().subscribe((data)=>{
     
     console.log(data);
      
    })
  }

  addToCart(id){
    this.movieService.addToCart(id).subscribe((data)=>{
      console.log(data)  
      this.cart = data
    })
  }
}
