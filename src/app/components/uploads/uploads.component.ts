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

  title = 'Upload';
  files: any;

  formInfo: any = {
    authorName: "",
    videoLink: "",
    description: ""
  }

  constructor(private fb: FormBuilder, private videoService: VideosService) { }

  ngOnInit(): void {
  }

  uploadForm = this.fb.group({
    authorName: ['', Validators.required],
    videoLink: ['', Validators.required],
    description: ['', Validators.required]
  })

  selectFile(event: any) {
    if(event.target.files.length > 0) {
      const file = event.target.files[0];
      this.files = file
    }
  }

  sendVideo() {

    const formData = new FormData()
    formData.append(this.formInfo.videoLink, this.files);
    
    
    let videoInfo = {
      authorName: this.formInfo.authorName,
      videoLink: this.formInfo.videoLink,
      description: this.formInfo.description
    }

    this.videoService.uploadVideo(videoInfo).subscribe((data: any) => {
      if(!data) {
        console.error();
      } else {
        console.log(data);
        alert('Worked')
      }
    })
  }

}
