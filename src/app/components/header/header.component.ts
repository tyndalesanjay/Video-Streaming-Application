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

  active:boolean = true;
  videosData: VideoInterface[] = [];  
  search = '';
  input: any = document.getElementById("searchInput");
  header: any = document.getElementById("header")

  constructor(private videoService: VideosService, private fb: FormBuilder, private router: Router) { 
  //  this.location = router.url.includes('admin')
  }

  ngOnInit(): void {
  }

  searchForm = this.fb.group({
    search: ['', Validators.required]
  })

  // search? = this.searchForm.get('search').value

  searchVideos(): void{
    if (this.search === '') {
      this.router.navigate([`/trailers`])
      alert('No Movies Found')
    } else {
      this.router.navigate([`/search/${this.search}`])
      console.error();
    }
  }


   
}
