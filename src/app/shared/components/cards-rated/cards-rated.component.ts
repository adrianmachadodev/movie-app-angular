import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from '@shared/services/shared.service';
import { MovieModel } from 'src/app/core/models/MovieModel';

@Component({
  selector: 'app-cards-rated',
  templateUrl: './cards-rated.component.html',
  styleUrls: ['./cards-rated.component.scss'],
})
export class CardsRatedComponent implements OnInit {
  @Input() dataMovieRated: MovieModel = {
    id: 0,
    poster_path: ``,
    release_date: '',
    original_title: '',
    original_language: '',
    title: '',
    backdrop_path: '',
  };

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {}

  sendDataFavorites(event: string): void {
    this.sharedService.sendDataMovie$.next(event);
  }
}
