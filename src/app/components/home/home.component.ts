import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { take, finalize } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  productList = null;
  loading: boolean;

  constructor(private api: ApiService) {
    console.log('api :>> ', api);
   }

  ngOnInit(): void {
    this.loading = true;
    this.api.getAllProducts().pipe(
      finalize(() => {
        this.loading = false;
      })
    ).subscribe(
      res => this.productList = res,
      err => console.log(err)
    );
  }

}
