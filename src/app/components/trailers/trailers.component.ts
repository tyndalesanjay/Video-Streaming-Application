import { Component, OnInit } from '@angular/core';
import { VideosService } from 'src/app/services/videos.service';
import { VideoInterface } from 'src/app/interfaces/video.interface';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-trailers',
  templateUrl: './trailers.component.html',
  styleUrls: ['./trailers.component.css'],
})
export class TrailersComponent implements OnInit {
  videos: VideoInterface[] = [];
  currentPlayingVideo!: HTMLVideoElement;

  constructor(private videoService: VideosService) {}

  ngOnInit(): void {
    this.getvideos();
  }

  getvideos() {
    this.videoService.getvideos().subscribe((data) => {
      if (!data) {
        throw new Error('No Videos Found');
      }
      this.videos = data.results;
      console.log(this.videos);
    });
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
