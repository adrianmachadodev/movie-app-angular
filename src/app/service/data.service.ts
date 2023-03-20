import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { MovieModel } from '../core/models/MovieModel';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private readonly URl = environment.api;
  api_key: string = 'api_key=f921c6f8c3f6b034bb3e7b097ffd8d56';
  tipeMovie: string = 'popular?';
  ratedMovie: string = 'top_rated?';
  comingMovie: string = 'upcoming?';
  lastestMovie: string = 'latest?';

  constructor(private http: HttpClient) {}

  getDataApi(): Observable<MovieModel> {
    return this.http.get<MovieModel>(
      `${this.URl}${this.tipeMovie}${this.api_key}`
    );
  }

  getDataApiRated(): Observable<MovieModel[]> {
    return this.http.get<MovieModel[]>(
      `${this.URl}${this.ratedMovie}${this.api_key}`
    );
  }

  getDataApiComing(): Observable<MovieModel[]> {
    return this.http.get<MovieModel[]>(
      `${this.URl}${this.comingMovie}${this.api_key}`
    );
  }

  getDataApiLatest(): Observable<MovieModel[]> {
    return this.http.get<MovieModel[]>(
      `${this.URl}${this.lastestMovie}${this.api_key}`
    );
  }
}
