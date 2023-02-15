import { Component, OnInit } from '@angular/core';
import { SharedService } from '@shared/services/shared.service';
import { MovieModel } from 'src/app/core/models/MovieModel';

@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.scss'],
})
export class FavoritesPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
