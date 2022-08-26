import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AdminInterface } from '../interfaces/admin.interface';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private baseUrl = 'http://localhost:5000/admin'

  constructor(private http: HttpClient) { }

  getAdmin(): Observable<any> {
    return this.http.get<AdminInterface[]>(this.baseUrl)
  }

  getAdminId(id: any): Observable<any> {
    return this.http.get<AdminInterface[]>(`${this.baseUrl}/${id}`)
  }

  createAdmin(adminInfo: any): Observable<any> {
    return this.http.post<AdminInterface[]>(this.baseUrl, adminInfo)
  }

  updateAdmin(id: any, adminUpdate: any): Observable<any> {
    return this.http.put<AdminInterface[]>(`${this.baseUrl + 'adminUpdate'}/${id}`, adminUpdate)
  }

  deleteAdmin(id: any): Observable<any> {
    return this.http.delete<AdminInterface>(`${this.baseUrl + 'deleteAdmin'}/${id}`)
  }

}
