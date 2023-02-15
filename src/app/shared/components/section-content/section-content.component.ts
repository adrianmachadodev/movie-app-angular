import { Component, Input, OnInit } from '@angular/core';
import { MovieModel } from 'src/app/core/models/MovieModel';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-section-content',
  templateUrl: './section-content.component.html',
  styleUrls: ['./section-content.component.scss'],
})
export class SectionContentComponent implements OnInit {
  arrayListMovie: Array<MovieModel> = [];
  newArrayMovie: Array<MovieModel> = [];

  @Input() title: string = '';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getDataApi().subscribe((res: any) => {
      this.arrayListMovie = res.results;
      this.newArrayMovie = this.arrayListMovie.slice(0, 4);
      console.log(this.arrayListMovie);
    });
  }
}
