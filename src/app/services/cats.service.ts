import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Cat} from '../interfaces/cat.interface'
@Injectable({
  providedIn: 'root'
})
export class CatsService {
  private http: HttpClient = inject(HttpClient);
  apiKey = 'api_key=live_p7HdtPhb896Yul9dxHzck5TeCS5GvdDLkUPVU99v6VINKJfkw2fv7ii9IEKqnAeU';
  catsApi = 'https://api.thecatapi.com/v1/images/search';
  constructor() { }
  getCats(limit = 10): Observable<Cat[]> {
    return this.http.get<Cat[]>(`${this.catsApi}?limit=${limit}&${this.apiKey}`)
  }

}
