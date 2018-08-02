import { Component, OnInit } from '@angular/core';
import { TvShow } from '../../models/tvshow.model'
import { TvshowService } from '../../services/tvshows/tvshow.service'

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.css'],
  providers:[TvshowService]
})
export class TvShowsComponent implements OnInit {

  tvshows: TvShow[]

  constructor(private tvshowService: TvshowService) { }

  ngOnInit() {
    this.fetchTvShows()
  }

  fetchTvShows(){
    this.tvshowService.getTvShows().subscribe((data:TvShow[])=>{
      this.tvshows = data
    })
  }
}
