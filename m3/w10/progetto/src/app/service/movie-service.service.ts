import { Injectable } from '@angular/core';
import { Movie } from '../interface/auth-response';
import { HttpClient } from '@angular/common/http';
import { ReplaySubject, Subject, } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { FilmFavorite } from '../interface/auth-response';

@Injectable({
  providedIn: 'root'
})

export class MovieService {

  movies: Movie[] = [];
  dataSubj = new ReplaySubject<boolean>()
  dataObs = this.dataSubj.asObservable()

  constructor(private http:HttpClient) { }


  getFilm() {
    return this.http.get<Movie[]>("http://localhost:3000/movies-popular").pipe(catchError((err)=>{
      this.dataSubj.next(false)
      throw new Error("GET fallita")
    }));
  }

  filmFavoriti(data:FilmFavorite) {
    return this.http.post<FilmFavorite>("http://localhost:3000/favorites", data)
  }

}
