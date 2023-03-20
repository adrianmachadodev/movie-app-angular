import { Component, Input, OnInit } from '@angular/core';
import { MovieModel } from 'src/app/core/models/MovieModel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  @Input() movieCarousel: MovieModel = {
    id: 0,
    poster_path: ``,
    release_date: '',
    original_title: '',
    original_language: '',
    title: '',
    backdrop_path: '',
  };
  constructor() {}

  ngOnInit(): void {}
}
