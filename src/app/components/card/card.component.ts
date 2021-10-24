import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../services/images/images.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  valueToSearch: string;

  constructor(
    public imageService: ImageService, 
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.valueToSearch= this.route.snapshot.paramMap.get('value');
  }

  ngOnInit() {
    this.searchImage(`&q=${this.valueToSearch}`)
  }

  searchImage(filter:string) {
    this.imageService.getImages(filter)
  }
  
}
