import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { Image } from 'src/app/models/image/image.interface';

interface IfetchImages {
  hits: Image[]
}

@Injectable({
  providedIn: 'root'
})

export class ImageService {

  images: Image[] = [];

  constructor( public httpService: HttpService ) { }

  getImages(filter:string) {
    this.httpService.get(filter).subscribe( ( data:IfetchImages ) => {
      this.images = data.hits
    })
    console.log(this.images)
  }

  getImage( idx:string ){
    return this.images[idx]
  }

}
