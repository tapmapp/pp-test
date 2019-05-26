import { Component, OnInit } from '@angular/core';
import { ContentService, ContentResolveBehavior } from '@picturepark/sdk-v1-angular';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  
  // SUBSCRIBERS
  routeSubscriber: Subscription;
  ppContentServiceSubscriber: Subscription;

  detailItem: any;
    
  constructor(
    public contentService: ContentService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {

    // ROUTE PARAM SUBSCRIBER
    this.routeSubscriber = this.route.params.subscribe(params => {

      this.ppContentServiceSubscriber = this.contentService.get(params.id, [ContentResolveBehavior.Content, ContentResolveBehavior.Outputs]).subscribe(data => {
        this.detailItem = data;
      });

    });
  }

  ngOnDestroy() {

    // UNSUBSCRIBE
    this.routeSubscriber.unsubscribe();
    this.ppContentServiceSubscriber.unsubscribe();

  }

}
