import { Component, OnInit } from '@angular/core';
import { MovieModel } from 'src/app/core/models/MovieModel';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor(private data: DataService) {}

  ngOnInit(): void {}
}
