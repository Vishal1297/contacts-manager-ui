import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Contact } from '../models/models';


@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Contact[]> {
    return this.http.get<Contact[]>(`${environment.BASE_URL}/contacts`);
  }

  get(id: string): Observable<Contact> {
    return this.http.get(`${environment.BASE_URL}/contact/${id}`);
  }

  createOrUpdate(data: Contact): Observable<Contact> {
    return this.http.post(`${environment.BASE_URL}/contact`, data);
  }

  delete(id: string): Observable<Contact> {
    return this.http.delete(`${environment.BASE_URL}/contact/${id}`);
  }

  deleteAll(): Observable<Contact> {
    return this.http.delete(`${environment.BASE_URL}/contacts/all`);
  }

  searchByFullName(name: string): Observable<Contact[]> {
    return this.http.get<Contact[]>(`${environment.BASE_URL}/contacts/name/${name}`);
  }

}
