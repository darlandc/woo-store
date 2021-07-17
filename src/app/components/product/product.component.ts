import { HtmldecoderPipe } from './../../pipes/html-decoder.pipe';
import { Component, OnInit, Pipe } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { finalize } from 'rxjs/operators';

export interface Persons {
  childrens?: number;
  adults?: number;
  better_age?: number;
}

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
  description: any;
  sanitized: any;
  clicked = false;

  persons: Persons;

  constructor(
    public router: Router,
    private api: ApiService,
    private route: ActivatedRoute,
    private htmlDecoderPipe: HtmldecoderPipe
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.persons = {
      childrens: 0,
      adults: 0,
      better_age: 0
    };
  }

  ngOnInit(): void {
    this.loading = true;
    this.api
      .getOneProduct(this.id)
      .pipe(
        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe(
        res => {
          this.product = res;
          this.images = res.images;
        },
        err => {}
      );
  }

  handleDatePicker(event): void {
    console.log(event.value);
  }

  add(product, persons) {
    console.log(product);
    debugger;
  }

  updatePersons(persons, type, isAddingUp): void {
    const isChildrens = type === 0;
    if (isAddingUp) {
      isChildrens ? persons.childrens++ : console.log('do nothing!');
    } else {
      isChildrens
        ? persons.childrens === 0
          ? console.log('do nothing!!')
          : persons.childrens--
        : console.log(666);
    }
  }
}
