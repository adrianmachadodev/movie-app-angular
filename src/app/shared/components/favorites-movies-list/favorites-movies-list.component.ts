import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from '@shared/services/shared.service';
import { MovieModel } from 'src/app/core/models/MovieModel';
import { setTimeout } from 'timers';

@Component({
  selector: 'app-favorites-movies-list',
  templateUrl: './favorites-movies-list.component.html',
  styleUrls: ['./favorites-movies-list.component.scss'],
})
export class FavoritesMoviesListComponent implements OnInit {
  arrMovieFav: string[] = [];
  stringMovie: string = '';

  constructor(private shared: SharedService) {}

  ngOnInit(): void {
    this.getDataFav();
  }

  getDataFav(): void {
    this.shared.sendDataMovie$.subscribe((res: any) => {
      console.log(res);
    });
  }
}
