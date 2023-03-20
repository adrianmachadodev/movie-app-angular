import { Component, OnInit } from '@angular/core';
import { MovieModel } from 'src/app/core/models/MovieModel';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  movieComing: Array<MovieModel> = [];
  oneMovie: Array<MovieModel> = [];

  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.getObsDataComing();
  }

  getObsDataComing(): void {
    this.data.getDataApiComing().subscribe((res: any) => {
      this.movieComing = res.results;
      this.oneMovie = this.movieComing.slice(0, 1);
    });
  }
}
