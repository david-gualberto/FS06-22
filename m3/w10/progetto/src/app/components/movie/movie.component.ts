import { Component, OnInit } from '@angular/core';
import { catchError, VirtualTimeScheduler } from 'rxjs';
import { FilmFavorite, Movie } from 'src/app/interface/auth-response';
import { MovieService } from 'src/app/service/movie-service.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  user:any = [];
  movies: Movie[] = [];
  constructor(private mvSrv:MovieService) { }

  ngOnInit(): void {
    let utente:any = localStorage.getItem('user')
    this.user = JSON.parse(utente)
    this.mvSrv.getFilm().subscribe((res)=>{
      this.movies = res
    })
  }

  addFavorite(id:number) {
    let data: FilmFavorite = {
      movieId: id,
      userId: this.user.user.id,
     }
      this.mvSrv.add(data).pipe(catchError(err=> {
      throw err
  }))

}
}
