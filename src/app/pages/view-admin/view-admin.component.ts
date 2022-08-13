import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { AdminInterface } from 'src/app/interfaces/admin.interface';
@Component({
  selector: 'app-view-admin',
  templateUrl: './view-admin.component.html',
  styleUrls: ['./view-admin.component.css']
})
export class ViewAdminComponent implements OnInit {

  admins: AdminInterface[] = [];

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
      this.adminService.getAdmin().subscribe((data: any) => {
        if(!data) {
          throw new Error('No Admin Found');
        }
        this.admins = data.getAdmins;
        console.log(this.admins)
      })
    
  }


}
