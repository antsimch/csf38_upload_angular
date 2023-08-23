import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { lastValueFrom } from 'rxjs';

import { UploadService } from 'src/app/upload.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  resourceUrl!: string

  constructor(
      private route: ActivatedRoute,
      private uploadSvc: UploadService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id']

    lastValueFrom(
        this.uploadSvc.getUrl(id)
    ).then(
      (data: any) => {
        this.resourceUrl = data['url']
        console.log(this.resourceUrl)
      }
    )
  }
}
