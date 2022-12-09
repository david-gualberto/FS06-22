export interface AuthResponse {

    accessToken: string,
    user: {
      email: string,
      id: number
    }
  }

  export interface User {
     nome: string,
     email:string,
     password: string
  }


  export interface Login {
    email:string,
    password: string
 }

 export interface Movie {
  adult: boolean,
  backdrop_path: string,
  genre_ids: [
    number
  ],
  id: number,
  original_language: string,
  original_title: string,
  overview: string,
  popularity: number,
  poster_path: string,
  release_date: string,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number
}

export interface FilmFavorite {
  movieId:number,
  userId: number
}
