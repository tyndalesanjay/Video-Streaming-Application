import { Component, OnInit } from '@angular/core';
import { VideosService } from 'src/app/services/videos.service';
import { VideoInterface } from 'src/app/interfaces/video.interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  currentPlayingVideo!: HTMLVideoElement;
  videosData: VideoInterface[] = [];
  refreshed = true;
  video: any= document.getElementById("video");

  constructor(private videoService: VideosService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getSearch(this.route.snapshot.paramMap.get('key'))
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false
    }

  };

  

  getSearch(key: any): void{
    this.videoService.searchVideo(key).subscribe((data: any) => {
      if(this.refreshed && data.length > 0){
        this.videosData = data.results
        this.refreshed = false
      } else {
        this.router.navigate(['/trailers'])
        alert(`No Movies with ${key} Redirecting to List`)
      }
      console.error();
    })

  }

  onPlayingVideo(event: any) {
    event.preventDefault();
    if (this.currentPlayingVideo === undefined) {
      this.currentPlayingVideo = event.target;
      this.currentPlayingVideo.play();
    } else {
      if (event.target !== this.currentPlayingVideo) {
        this.currentPlayingVideo.pause();
        this.currentPlayingVideo = event.target;
        this.currentPlayingVideo.play();
      }
    }
  }
}
