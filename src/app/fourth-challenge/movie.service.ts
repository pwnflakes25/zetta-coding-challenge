import { Injectable } from '@angular/core';
import {Movie} from './movie-model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  moviesSubject = new Subject();
  movies_data = [
    {
      id: '1',
      title: 'Shingeki no Kyojin: The Final Season',
      episodes: 16,
      info_url: 'https://myanimelist.net/anime/40028/Shingeki_no_Kyojin__The_Final_Season',
      watch_url: 'https://www12.9anime.to/watch/attack-on-titan-final-season.k524/ep-1'
    },
    {
      id: '2',
      title: 'Kimetsu no Yaiba Movie: Mugen Ressha-hen',
      episodes: 1,
      info_url: 'https://myanimelist.net/anime/40456/Kimetsu_no_Yaiba_Movie__Mugen_Ressha-hen',
      watch_url: 'https://demonslayer-anime.com/risshihen/streaming/'
    },
    {
      id: '3',
      title: 'Start-Up',
      episodes: 16,
      info_url: 'https://asianwiki.com/Start-Up_(Korean_Drama)',
      watch_url: 'https://kissasians.org/detail/start-up-2020/'
    },
  ];

  constructor() { }

  movieSub() {
    return this.moviesSubject;
  }

  getMovies() {
    this.moviesSubject.next(this.movies_data);
  }

  getMovieById(id: string) {
    return this.movies_data.find(movie => movie.id == id);
  }

  addMovie(title: string, episodes: number, info_url: string, watch_url: string) {
    let movieToAdd: Movie = {
      id: (this.movies_data.length + 1).toString(),
      title: title,
      episodes: episodes,
      info_url: info_url,
      watch_url: watch_url,
    }
    this.movies_data.push(movieToAdd);
    this.moviesSubject.next(this.movies_data);
  }

  deleteMovie(movieId: string) {
    let indexToRemove = this.movies_data.findIndex(movie => movie.id == movieId);
    if (indexToRemove < 0) return;
    this.movies_data.splice(indexToRemove,1);
    console.log(this.movies_data);
    this.moviesSubject.next(this.movies_data);
  }

  editMovie(movieId: string, title:string, episodes: number, info_url: string, watch_url: string) {
    let indexToUpdate = this.movies_data.findIndex(movie => movie.id == movieId);
    //check if movie id exist- if not found, return
    if (indexToUpdate < 0) return;
    let movieToAdd: Movie = {
      id: movieId,
      title: title,
      episodes: episodes,
      info_url: info_url,
      watch_url: watch_url,
    }
    console.log(movieToAdd);
    this.movies_data[indexToUpdate] = movieToAdd;
    this.moviesSubject.next(this.movies_data);
  }

}
