import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Maravillas } from './maravillas';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MaravillasService {
  private apiUrl = environment.baseUrl 

  constructor(private http: HttpClient) { }

  getMaravillas(): Observable<Maravillas[]> {
    return this.http.get<Maravillas[]>(this.apiUrl);
  }
}