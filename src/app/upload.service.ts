import { HttpClient } from '@angular/common/http';
import { ElementRef, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private http: HttpClient) { }

  postFile(file: ElementRef) {
    const data = new FormData()
    data.set("file", file.nativeElement.files[0])
    console.log(data)
    return this.http.post<any>('/api/upload', data)
  }

  getUrl(id: string) {
    console.log(id)
    return this.http.get<any>(`/api/audio/${id}`)
  }
}
