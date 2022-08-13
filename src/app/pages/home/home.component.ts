import { Component, OnInit } from '@angular/core';
import { VideosService } from 'src/app/services/videos.service';
import { VideoInterface } from 'src/app/interfaces/video.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title= 'Video Home'
  // video = document.getElementById("myVideo");
  // sticky = this.video?.offsetTop;

  videos: VideoInterface[] = [];
  constructor(private videoService: VideosService) { }

  ngOnInit(): void {
    // window.addEventListener('scroll', this.scroll, true)
    this.getvideos()
  }
  
  // scroll = (event: any): void => {
  //   if(window.screenY >= 300) {
  //     this.video?.offsetHeight
  //   }
  // }

  getvideos() {
    this.videoService.getvideos().subscribe((data) => {
      if(!data) {
        throw new Error('No Videos Found');
      }
      this.videos = data.results
      console.log(this.videos)
    })
  }

}
