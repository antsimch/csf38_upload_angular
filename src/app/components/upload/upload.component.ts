import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';

import { UploadService } from 'src/app/upload.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {

  @ViewChild('file')
  myFile!: ElementRef

  id!: string

  constructor(
      private uploadSvc: UploadService,
      private router: Router) {}

  upload() {
    lastValueFrom(
        this.uploadSvc.postFile(this.myFile)
    ).then(
        (data: any) => {
          this.id = data.id
          console.log(this.id)
          this.router.navigate(['/audio', this.id])
        }
    )
  }
}
