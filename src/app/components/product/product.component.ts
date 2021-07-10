import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  id;
  product;
  loading: boolean;
  images = [];
  date;

  constructor(
    public router: Router,
    private api: ApiService,
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.loading = true;
    this.api
      .getOneProduct(this.id)
      .pipe(
        finalize(() => {
          this.loading = false;
        }))
      .subscribe(res => {
        (this.product = res);
        this.images = res.images;
        console.log(this.images, 'PRODUCT');
      }, err => {});
  }

  handleDatePicker(event): void{
    console.log(event.value);
  }
}
