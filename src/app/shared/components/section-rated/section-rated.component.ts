import { Component, OnInit } from '@angular/core';
import { MovieModel } from 'src/app/core/models/MovieModel';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-section-rated',
  templateUrl: './section-rated.component.html',
  styleUrls: ['./section-rated.component.scss'],
})
export class SectionRatedComponent implements OnInit {
  movieRatedList: Array<MovieModel> = [];
  newMovieRated: Array<MovieModel> = [];

  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.getDataRatedMovies();
  }

  getDataRatedMovies() {
    this.data.getDataApiRated().subscribe((res: any) => {
      this.movieRatedList = res.results;
      this.newMovieRated = this.movieRatedList.slice(0, 4);
      console.log(this.newMovieRated);
    });
  }
}
