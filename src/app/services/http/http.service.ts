import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  path:string = environment.pixabayAPI;

  constructor( public http: HttpClient ) { }

  get(filter:string) {
    return this.http.get(this.path + filter);
  }

}
