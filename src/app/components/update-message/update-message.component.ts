import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Form, FormBuilder, NgForm, Validators } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';
import { Message } from 'src/app/interfaces/contact.interface';
import { MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-update-message',
  templateUrl: './update-message.component.html',
  styleUrls: ['./update-message.component.css']
})
export class UpdateMessageComponent implements OnInit {

  message: any = [];

  constructor(private messageService: ContactService, private route: ActivatedRoute, private router: Router, private fb: FormBuilder, private dialog: MatDialog) { }

  ngOnInit(): void {

    this.getMessage(this.route.snapshot.paramMap.get('id'));
  }

  contactForm = this.fb.group({
    name: ['', Validators.required],
    subject: ['', Validators.required],
    email: ['', Validators.required],
    message: ['', Validators.required] 
  })

  getMessage(id: any) {
    this.messageService.getById(id).subscribe((data: any) => {
      this.message = data.results
      console.log(this.message)
    })
  }

  deleteMessage(id: any) {
    this.messageService.deleteMessage(id).subscribe((data) => {
      if(!data) {
        console.error();
      } else {
        this.router.navigate(['/admin'])
        alert('Deleted Message')
      }
    })
  }

}
