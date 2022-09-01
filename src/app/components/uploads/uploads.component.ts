import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { VideoInterface } from 'src/app/interfaces/video.interface';
import { VideosService } from 'src/app/services/videos.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-uploads',
  templateUrl: './uploads.component.html',
  styleUrls: ['./uploads.component.css']
})
export class UploadsComponent implements OnInit {

  title = 'Upload';
  files: any;

  constructor(private fb: FormBuilder, private videoService: VideosService, private router: Router) { }

  ngOnInit(): void {
  }

  uploadForm = this.fb.group({
    videoName: ['', Validators.required],
    videoLink: ['', Validators.required],
    videoImage: ['', Validators.required],
    releaseDate: ['', Validators.required],
    description: ['', Validators.required],
  })

  // selectFile(event: any) {
  //   if(event.target.files.length > 0) {
  //     const file = event.target.files[0];
  //     this.files = file
  //   }
  // }

  sendVideo() {
    this.videoService.uploadVideo(this.uploadForm.value).subscribe((data: any) => {
      if(!data) {
        console.error();
      } else {
        console.log(data);
        alert('A New Movie has been Added Successfully')
        this.router.navigate(['/admin'])
      }
    })
  }

}
