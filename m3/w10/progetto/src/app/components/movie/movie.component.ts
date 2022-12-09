import { Component, OnInit } from '@angular/core';
import { FilmFavorite, Movie } from 'src/app/interface/auth-response';
import { MovieService } from 'src/app/service/movie-service.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  movies: Movie[] = [];
  data: FilmFavorite[] = []
  constructor(private mvSrv:MovieService) { }

  ngOnInit(): void {
    this.mvSrv.getFilm().subscribe((res)=>{
      this.movies = res
    })
  }

  addFavorite(data:FilmFavorite) {
    this.mvSrv.filmFavoriti(data)
  }
}
