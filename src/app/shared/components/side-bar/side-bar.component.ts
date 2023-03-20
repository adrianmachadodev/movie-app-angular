import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '@shared/services/shared.service';
import { MovieModel } from 'src/app/core/models/MovieModel';

import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  arrayMovies: Array<any> = [];
  stringMovei: string = '';
  arrayLocal: string[] = [];

  constructor(private shared: SharedService, private route: Router) {}

  ngOnInit(): void {
    this.getDataLocalService();
    this.route;
  }

  getDataLocalService(): void {
    const data = this.shared.getDataLocalStorage();
    this.arrayLocal.push(data);
  }
}
