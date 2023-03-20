import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-premiere-page',
  templateUrl: './premiere-page.component.html',
  styleUrls: ['./premiere-page.component.scss'],
})
export class PremierePageComponent implements OnInit {
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getDataApiLatest().subscribe((res: any) => {
      console.log(res);
    });
  }
}
