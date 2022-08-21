import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, NgForm, Validators } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { UpdateMessageComponent } from '../update-message/update-message.component';
import { ContactService } from 'src/app/services/contact.service';
import { Message } from 'src/app/interfaces/contact.interface';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(private messageService: ContactService, private fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  contactForm = this.fb.group({
    name: ['', Validators.required],
    subject: ['', Validators.required],
    email: ['', Validators.required],
    message: ['', Validators.required]
  })

  onSubmit() {
    this.messageService.sendMessage(this.contactForm.value).subscribe((data: any) => {
      if(!data) {
        console.error(this.contactForm.value);
        alert('Failed to send Message')
      } else {
        console.log(data);
        alert('Message Sent')
      }
    })
  }
  openDialog() {
    this.dialog.open(UpdateMessageComponent);
  }
}

