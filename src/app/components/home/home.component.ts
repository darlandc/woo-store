import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { take, finalize } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  productList = null;
  loading: boolean;
  id;

   constructor(public router: Router, private api: ApiService, private route: ActivatedRoute) {
    this.id += this.route.snapshot.paramMap.get("id")
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
