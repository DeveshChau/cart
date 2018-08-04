import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie/movie.service';
import { CartService } from '../../services/Cart/cart.service'
import { Movie } from '../../models/movie.model'
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  providers:[MovieService,CartService]
})
export class MoviesComponent implements OnInit {  

  movies: Movie[]
  cart
  length  

  constructor(private movieService: MovieService, private router:Router,
  private cartService: CartService) { }

  ngOnInit() {
    this.fetchMovies()
  }

  fetchMovies(){
    this.movieService.getMovies().subscribe((data:Movie[])=>{
      this.movies = data
    })
  }

  addToCart(movie){
    this.cart = this.cartService.addToCart(movie)
    this.length = this.cart.cart.length
    console.log(this.cart.cart);
    console.log(this.cart.cart.length);
    console.log(this.cart.cart[0].title);
  }
}
