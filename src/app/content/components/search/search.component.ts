import { Component, OnDestroy } from '@angular/core';
import { ContentService, ContentSearchRequest, Content } from '@picturepark/sdk-v1-angular';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnDestroy{
  
  ppContentService: Subscription;

  list: Content[]

  constructor(
    public contentService: ContentService,
    private router: Router,
  ){}

  // MAKE SEARCH REQUEST
  makeSearch(event): void {

    const request = new ContentSearchRequest();
    request.searchString = event.target.value;

    this.ppContentService = this.contentService.search(request).subscribe(response => {
      this.list = response.results
    });

  }

  goTo(item) {
    this.router.navigate([`/content/detail/${item.id}`,{
      image: item
    }]);
  }

  ngOnDestroy() {

    // UNSUBSCRIBE
    if(this.ppContentService) this.ppContentService.unsubscribe();
    
  }

}
