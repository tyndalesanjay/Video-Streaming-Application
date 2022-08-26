import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { AdminService } from 'src/app/services/admin.service';
import { VideosService } from 'src/app/services/videos.service';
import { ContactService } from 'src/app/services/contact.service';
import { AdminInterface } from 'src/app/interfaces/admin.interface';
import { VideoInterface } from 'src/app/interfaces/video.interface';
import { Message } from 'src/app/interfaces/contact.interface'
@Component({
  selector: 'app-view-admin',
  templateUrl: './view-admin.component.html',
  styleUrls: ['./view-admin.component.css'],
})
export class ViewAdminComponent implements OnInit {
  admins: AdminInterface[] = [];
  videos: VideoInterface[] = [];
  message: Message[] = []
  adminLength = '';
  videoLength = '';
  contactLength = '';
  p: any;

  constructor(private adminService: AdminService, private videoService: VideosService, private messageService: ContactService) {}

  ngOnInit(): void {
    this.adminService.getAdmin().subscribe((data: any) => {
      if (!data) {
        throw new Error('No Admin Found');
      }
      this.admins = data.getAdmins;
      this.adminLength = data.length;
      console.log(this.admins);
    });

    this.videoService.getAllVideos().subscribe((data: any) => {
      this.videos = data.results;
      this.videoLength = data.length
      console.log()
    })

    this.messageService.getAll().subscribe((data: any) => {
      this.message = data.results
      this.contactLength = data.length
      console.log(this.message);
       
    })

  }

  deleteMessage(id: any) {
    this.messageService.deleteMessage(id).subscribe((data) => {
      if(!data) {
        console.error();
      } else {
        window.location.reload()
        alert('Deleted Message')
      }
    })
  }

  deleteVideo(id: any) {
    this.videoService.deleteVideo(id).subscribe((data: any) => {
      if(!data) {
        console.error();
      } else {
        window.location.reload()
        alert('Deleted Video')
      }
    })
  }
}
