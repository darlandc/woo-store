import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  productList: [];

  constructor(private api: ApiService) {
    console.log('api :>> ', api);
   }

  ngOnInit(): void {
    this.api.getAllProducts().subscribe(
      res => this.productList = res,
      err => console.log(err)
    );
  }

}
