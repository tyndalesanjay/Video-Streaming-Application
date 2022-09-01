import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { VideosService } from 'src/app/services/videos.service';
import { VideoInterface } from 'src/app/interfaces/video.interface';

@Component({
  selector: 'app-view-trailer',
  templateUrl: './view-trailer.component.html',
  styleUrls: ['./view-trailer.component.css']
})
export class ViewTrailerComponent implements OnInit {
  video: any = [];
  reviews: any = []
  PlayingVideo!: HTMLVideoElement;

  constructor(private route: ActivatedRoute, private videoService: VideosService, private fb: FormBuilder) { }

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
        this.reviews = this.video.reviews
        console.log(this.video)
      }
      
    })
  }

  

  // reviewForm = this.fb.group({
  //   username: ['', Validators.required],
  //   review: ['', Validators.required]
  // })

  // uploadReview() {
  //   this.videoService.createReview(this.video._id, this.reviewForm.value ).subscribe((data: any) => {
  //     if(data.length <= 0) {
  //       console.error();
  //       console.log('Data Empty')
  //     } else {
  //       this.reviews = this.video.reviews
  //       window.location.reload()
  //       console.log(this.reviews)
  //     }
  //   })
  // }

}
