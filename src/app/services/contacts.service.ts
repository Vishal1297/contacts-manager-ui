import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../models/models';

const baseUrl = 'http://localhost:8080/contact/v1'

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Contact[]> {
    return this.http.get<Contact[]>(`${baseUrl}/contacts`);
  }

  get(id: string): Observable<Contact> {
    return this.http.get(`${baseUrl}/contact/${id}`);
  }

  createOrUpdate(data: Contact): Observable<Contact> {
    return this.http.post(`${baseUrl}/contact`, data);
  }

  delete(id: string): Observable<Contact> {
    return this.http.delete(`${baseUrl}/contact/${id}`);
  }

  deleteAll(): Observable<Contact> {
    return this.http.delete(`${baseUrl}/contacts/all`);
  }

  searchByFullName(name: string): Observable<Contact[]> {
    return this.http.get<Contact[]>(`${baseUrl}/contacts/name/${name}`);
  }

}
