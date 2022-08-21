import { Component, OnInit, Output ,EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VideosService } from 'src/app/services/videos.service';
import { VideoInterface } from 'src/app/interfaces/video.interface';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  videosData: VideoInterface[] = [];  
  search = '';

  constructor(private videoService: VideosService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
  }

  searchForm = this.fb.group({
    search: ['', Validators.required]
  })

  // search? = this.searchForm.get('search').value

  searchVideos(): void{
      this.router.navigate([`/search/${this.search}`])
      console.error();
  }
}
