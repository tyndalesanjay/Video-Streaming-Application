import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from '../interfaces/contact.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private baseUrl = 'http://localhost:5000/messages/'

  constructor(private http: HttpClient) { }

  getAll(): Observable<Message[]> {
    return this.http.get<Message[]>(this.baseUrl)
  }

  getById(id: string): Observable<Message[]> {
    return this.http.get<Message[]>(`${this.baseUrl} + 'get_message'/${id}`)
  }

  sendMessage(messageInfo: any): Observable<Message[]> {
    return this.http.post<Message[]>(this.baseUrl + 'sendMessage', messageInfo)
  }

  updateMessage(id: string, messageUpdate: any): Observable<Message[]> {
    return this.http.put<Message[]>(`${this.baseUrl} + 'update_message'/${id}`, messageUpdate)
  }

  deleteMessage(id: string): Observable<Message[]> {
    return this.http.delete<Message[]>(`${this.baseUrl} + 'delete_message'/${id}`)
  }
}
