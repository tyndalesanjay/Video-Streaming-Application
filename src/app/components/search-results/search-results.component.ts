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
      if(this.refreshed){
        this.videosData = data.results
        this.refreshed = false
      }
      console.error();
      
    })

  }

  onPlayingVideo(event: any) {
    event.preventDefault();
    // play the first video that is chosen by the user
    if (this.currentPlayingVideo === undefined) {
      this.currentPlayingVideo = event.target;
      this.currentPlayingVideo.play();
    } else {
      // if the user plays a new video, pause the last one and play the new one
      if (event.target !== this.currentPlayingVideo) {
        this.currentPlayingVideo.pause();
        this.currentPlayingVideo = event.target;
        this.currentPlayingVideo.play();
      }
    }
  }
}
