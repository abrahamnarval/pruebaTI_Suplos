import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../services/images/images.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  value: number;
  valueToSearch: string;

  constructor( 
      public imageService: ImageService, 
      private route: ActivatedRoute,
      private router: Router
    ) {
      this.valueToSearch = this.route.snapshot.paramMap.get('value');
    }

  ngOnInit() {
    this.searchImage(`&q=${this.valueToSearch}`)
  }

  searchImage(searchImage:string) {
    this.imageService.getImages(searchImage)
  }
  
  onEnter(event) {
    this.router.navigate(['/searcher', event])
  }

}
