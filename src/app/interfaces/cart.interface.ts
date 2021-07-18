import { Persons } from './../components/product/product.component';

export interface Cart {
  items: [
    {
      id: number;
      name: string;
      amount: number;
      persons?: Persons;
      price: string;
      category?: number;
    }
  ];
}
