import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient){
    console.log(`api service is running!`);
  }

  getAllProducts(): Observable<any> {
    return this.http.get(`http://localhost:8888/go/wp-json/wp/v2/product`, {});
  }
}
