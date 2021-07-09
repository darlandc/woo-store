import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  URL_BASE_API = 'https://gramadoonline.tur.br/?rest_route=/wp/v2';

  constructor(private http: HttpClient){
    console.log(`api service is running!`);
  }

  getAllProducts(): Observable<any> {
    return this.http.get(`${this.URL_BASE_API}/product`, {});
  }

  getOneProduct(id): Observable<any> {
    return this.http.get(`${this.URL_BASE_API}/product/` + id, {});
  }
}
