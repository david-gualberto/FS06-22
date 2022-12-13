import { Component, Input, OnInit} from '@angular/core';
import { catchError, elementAt } from 'rxjs';
import { FilmFavorite, Movie } from 'src/app/interface/auth-response';
import { MovieService } from 'src/app/service/movie-service.service';




@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})

export class CardComponent implements OnInit {

  @Input('film')

  film!: Movie;
  favorite:boolean = false
  user:any = [];
  filmFavorite:any = [];
  x:any;

  constructor(private mvSrv:MovieService) {}

  ngOnInit(): void {
    let utente:any = localStorage.getItem('user')
    this.user = JSON.parse(utente)
     this.getFavorite(this.user.user.id)
  }


  addFavorite(id:number) {

    let data: FilmFavorite = {
      movieId: id,
      userId: this.user.user.id,
     }
    if(this.favorite == false) {

      this.mvSrv.add(data).pipe(catchError(err=> {
        throw err
      })).subscribe((res)=>
      this.favorite= true
      )} else {
        this.mvSrv.dislike(this.x).subscribe(() => console.log('Delete successful'));
        this.favorite = false
      }
   }

getFavorite(id:number) {
    this.mvSrv.favoriteFilm(id).subscribe((res)=>{
    this.filmFavorite = res
    console.log(this.filmFavorite)
    let film = this.filmFavorite.find((element:any) => element.movieId == this.film.id)
    if (film) {
       this.favorite = true
       this.x = film.id
       return
     } else {
       this.favorite = false
     }
  })
}

}

