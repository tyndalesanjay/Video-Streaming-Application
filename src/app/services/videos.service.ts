import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { VideoInterface } from '../interfaces/video.interface';

@Injectable({
  providedIn: 'root'
})
export class VideosService {

  private baseUrl = 'http://localhost:5000/video/'

  constructor(private http: HttpClient) { }

  getvideos(): Observable<any> {
    return this.http.get<VideoInterface[]>(this.baseUrl)
  }

  uploadVideo(videoInfo: any): Observable<any> {
    return this.http.post<VideoInterface[]>(this.baseUrl + 'videoUploadRequest', videoInfo)
  }

  searchVideo(key:any): Observable<VideoInterface[]> {
    return this.http.get<VideoInterface[]>(`${this.baseUrl + 'searchVideos'}/${key}`)
  }

}
