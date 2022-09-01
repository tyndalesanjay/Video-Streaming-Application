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

  getAllVideos(): Observable<any> {
    return this.http.get<VideoInterface[]>(`${this.baseUrl + 'videos'}`)
  }

  getVideoById(id: string): Observable<VideoInterface[]> {
    return this.http.get<VideoInterface[]>(`${this.baseUrl + 'trailer'}/${id}`)
  }

  createReview(id: string, data: any): Observable<VideoInterface[]> {
    return this.http.put<VideoInterface[]>(`${this.baseUrl + 'reviews'}/${id}`, data)
  }

  uploadVideo(videoInfo: any): Observable<any> {
    return this.http.post<VideoInterface[]>(`${this.baseUrl + 'videoUpload'}`, videoInfo)
  }

  updateVideo(id: string, messageUpdate: any): Observable<VideoInterface[]> {
    return this.http.put<VideoInterface[]>(`${this.baseUrl + 'updateVideo'}/${id}`, messageUpdate)
  }

    searchVideo(key:any): Observable<VideoInterface[]> {
      return this.http.get<VideoInterface[]>(`${this.baseUrl + 'searchVideos'}/${key}`)
    }

  deleteVideo(id: any): Observable<VideoInterface[]> {
    return this.http.delete<VideoInterface[]>(`${this.baseUrl + 'deleteVideo'}/${id}`)
  }

}
