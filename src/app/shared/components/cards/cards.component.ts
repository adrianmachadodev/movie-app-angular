import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { SharedService } from '@shared/services/shared.service';
import { SharedModule } from '@shared/shared.module';
import { MovieModel } from 'src/app/core/models/MovieModel';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  @Input() cardMovie: MovieModel = {
    id: 0,
    poster_path: ``,
    release_date: '',
    original_title: '',
    original_language: '',
    title: '',
    backdrop_path: '',
  };
  imgSrc: string = `http://image.tmdb.org/t/p/w185/`;

  constructor(private shared: SharedService, private route: Router) {}

  ngOnInit(): void {}

  idSend(id: number) {
    this.route.navigate(['movies/' + id]);
  }
}
