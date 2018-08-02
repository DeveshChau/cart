import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie/movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
  providers:[MovieService]
})
export class MovieDetailsComponent implements OnInit {

  movie = {}

  constructor(private movieService: MovieService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.movieDetails(this.route.snapshot.params['id'])
  }

  movieDetails(id){
    this.movieService.getMovieById(id).subscribe((data)=>{
      this.movie = data
      console.log(data);     
    })
  }

  


}
