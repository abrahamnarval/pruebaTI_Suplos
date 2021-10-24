import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../services/images/images.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css']
})
export class SearcherComponent implements OnInit {

  valueToSearch: string;
  filters: string [];
  category: string;

  constructor( 
      public imageService: ImageService, 
      private route: ActivatedRoute ,
      private router: Router,
    ) {
      this.filters = ['science', 'education', 'people', 'feelings', 'computer', 'buildings'];
      this.valueToSearch= this.route.snapshot.paramMap.get('value');
    }

  ngOnInit() {
    this.searchImage(`&q=${this.valueToSearch}`)
  }

  searchImage(filter:string) {
    this.imageService.getImages(filter)
  }

  selectCategory(event){
    this.searchImage(`&q=${this.valueToSearch}&category=${event}`)
  }

  onEnter(event) {
    this.router.navigate(['/searcher', event])
    this.searchImage(`&q=${event}`)
  }

}
