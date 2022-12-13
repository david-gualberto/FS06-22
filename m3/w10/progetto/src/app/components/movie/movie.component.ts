import { Component, OnInit } from '@angular/core';
import {  Movie } from 'src/app/interface/auth-response';
import { MovieService } from 'src/app/service/movie-service.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  user:any = [];

  movies: Movie[] = [];
  filmFavorite:any = [];

  constructor(private mvSrv:MovieService) { }

  ngOnInit(): void {
    let utente:any = localStorage.getItem('user')
    this.user = JSON.parse(utente)

    this.mvSrv.getFilm().subscribe((res)=>{
      this.movies = res
    })
  }

}
