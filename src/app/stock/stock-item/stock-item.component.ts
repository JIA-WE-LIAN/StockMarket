import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent implements OnInit {

  public stock: Stock;
  public stockClasses;

  constructor() { }

  ngOnInit(): void {
    this.stock = new Stock('Test Stock Market', 'TSC', 85, 80);
    const diff = (this.stock.price / this.stock.previousPrice) - 1;
    const largeChange = Math.abs(diff) > 0.01;
    this.stockClasses = {
      positive: this.stock.isPositiveChange(),
      negative: !this.stock.isPositiveChange(),
      'large-change': largeChange,
      'small-change': !largeChange
    }
  }

  toggleFavorite() {
    console.log('toggle Event');
    this.stock.favorite = !this.stock.favorite;
  }
}
