import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MovieModel } from 'src/app/core/models/MovieModel';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  sendDataMovie$: BehaviorSubject<string> = new BehaviorSubject('');

  constructor() {}
}
