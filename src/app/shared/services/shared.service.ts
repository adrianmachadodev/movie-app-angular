import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MovieModel } from 'src/app/core/models/MovieModel';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  sendDataMovie$: BehaviorSubject<string> = new BehaviorSubject('');
  localDataSend$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  movieTitle: string = '';
  arrayMovieTitle: string[] = [];

  constructor() {}

  setDataLocalStorage(): void {
    this.localDataSend$.subscribe((res: any) => {
      this.movieTitle = res;
      this.arrayMovieTitle.push(this.movieTitle);
      localStorage.setItem('nameMovies', JSON.stringify(this.arrayMovieTitle));
    });
  }

  getDataLocalStorage() {
    let data = localStorage.getItem('nameMovies' || '');
    let parseData = data ? JSON.parse(data) : '[]';
    return parseData;
  }
}
