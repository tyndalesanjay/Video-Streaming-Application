import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { VideoInterface } from 'src/app/interfaces/video.interface';
import { VideosService } from 'src/app/services/videos.service';
@Component({
  selector: 'app-uploads',
  templateUrl: './uploads.component.html',
  styleUrls: ['./uploads.component.css']
})
export class UploadsComponent implements OnInit {

  

  constructor(private fb: FormBuilder, private videoService: VideosService) { }

  ngOnInit(): void {
  }

  uploadForm = this.fb.group({
    authorName: ['', Validators.required],
    videoLink: ['', Validators.required],
    description: ['', Validators.required]
  })

  sendVideo() {
    this.videoService.uploadVideo(this.uploadForm.value).subscribe((data: any) => {
      console.log(this.uploadForm.value)
      console.log(data)
      console.error();
      
    })
  }

}
