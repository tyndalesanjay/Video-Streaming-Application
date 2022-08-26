import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { VideosService } from 'src/app/services/videos.service';
import { VideoInterface } from 'src/app/interfaces/video.interface';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-trailers-tbl',
  templateUrl: './trailers-tbl.component.html',
  styleUrls: ['./trailers-tbl.component.css']
})
export class TrailersTblComponent implements OnInit {
  video: any = [];

  constructor(private videoService: VideosService, private route: ActivatedRoute, private router: Router, private fb: FormBuilder, private location: Location) { }

  ngOnInit(): void {
    this.getVideo(this.route.snapshot.paramMap.get('id'));
    console.log(this.updateForm);

    
  }

  updateForm = this.fb.group({
    videoName: ['', Validators.required],
    videoLink: ['', Validators.required],
    videoImage: ['', Validators.required],
    releaseDate: ['', Validators.required],
    description: ['', Validators.required],
    status: ['', Validators.required]
  })

  getVideo(id: any): void {
    this.videoService.getVideoById(id).subscribe((data: any) => {
      this.video = data.results;
      this.updateForm.setValue(
        {
          videoName: this.video.videoName,
          videoLink: this.video.videoLink,
          videoImage: this.video.videoImage,
          releaseDate: this.video.releaseDate,
          description: this.video.description,
          status: this.video.status
        }
      )
      console.log(this.video);
      
    })
  }

  updateTrailer(id: any){
    this.videoService.updateVideo(id, this.updateForm.value).subscribe((data: any) => {
      if(!data) {
        console.error();
        alert('Could not Upload')
      } else {
        this.location.back()
        alert('Video Updated')
      }
      console.log(data);
    })
  }

}
