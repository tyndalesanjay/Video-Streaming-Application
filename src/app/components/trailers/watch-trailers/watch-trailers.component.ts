import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideosService } from 'src/app/services/videos.service';
import { VideoInterface } from 'src/app/interfaces/video.interface';

@Component({
  selector: 'app-watch-trailers',
  templateUrl: './watch-trailers.component.html',
  styleUrls: ['./watch-trailers.component.css']
})
export class WatchTrailersComponent implements OnInit {
  video: any = []
  PlayingVideo!: HTMLVideoElement;
  playIcon:boolean = true


  constructor(private route: ActivatedRoute, private videoService: VideosService) { }

  ngOnInit(): void {
    this.getById(this.route.snapshot.paramMap.get('id'));
  }

  getById(id: any) {
    this.videoService.getVideoById(id).subscribe((data: any) => {
      if(data.length <= 0) {
        console.error();
        console.log('Data Empty')
      } else {
        this.video = data.results
        console.log(this.video)
      }
      
    })
  }

  onplay() {
    this.playIcon = !this.playIcon
    
  }

  // onPlayingVideo(event: any) {
  //   event.preventDefault();
  //   if (this.PlayingVideo === this.PlayingVideo) {
  //     this.PlayingVideo = event.target;
  //     this.PlayingVideo.play();

  //   } else {
  //     if (event.target == this.PlayingVideo) {
  //       this.PlayingVideo.pause();
  //       this.PlayingVideo = event.target;
  //     }
  //   }
  // }

}
