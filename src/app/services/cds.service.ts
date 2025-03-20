import { Injectable } from '@angular/core';
import { CD } from '../models/cd.models';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CdsService {

  constructor(private http: HttpClient) { }

  getAllCD(): Observable<CD[]> {
    return this.http.get<CD[]>('http://localhost:3000/CD');
  }

  getCDById(id: number): Observable<CD> {
    return this.http.get<CD>('http://localhost:3000/CD/' + id);
  }

  addCD(nouvcd: CD): Observable<CD> {
    nouvcd.id = Date.now() + Math.floor(Math.random() * 1000);
    return this.http.post<CD>('http://localhost:3000/CD', nouvcd);
  }
}
