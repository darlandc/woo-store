import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WooCommerceRestApi } from '@woocommerce/woocommerce-rest-api';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  URL_BASE_API = 'https://gramadoonline.tur.br/?rest_route=/wp/v2';
  URL_WC_API = 'https://gramadoonline.tur.br/?rest_route=/wc/v2';
  URL_AUTHORIZE = 'https://gramadoonline.tur.br/?rest_route=/wc-auth/v1/authorize';
  CONSUMER_KEY = 'ck_12bb80a7401d433820d5cd949f7c08dd91f15cfe';
  CONSUMER_SECRET = 'cs_73f5183fef3418465712e40fb4b790c6440c535d';
  headers: HttpHeaders;
  session: WooCommerceRestApi;


  constructor(private http: HttpClient){
    console.log(`api service is running!`);

  }

  getAllProducts(): Observable<any> {
    return this.http.get(`${this.URL_WC_API}/products`, {});
  }

  getOneProduct(id): Observable<any> {
    return this.http.get(`${this.URL_WC_API}/products/${id}`, {});
  }
}
