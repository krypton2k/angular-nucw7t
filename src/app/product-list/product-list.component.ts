import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = products;

  share() {
    window.alert('The nice thing has been added to your alerts');
  }

  nicePrice(price: number) {
    return new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'AUD',
    }).format(price);
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
