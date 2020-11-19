import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent implements OnInit {

  public stock: Stock;

  constructor() { }

  ngOnInit(): void {
    this.stock = new Stock('Test Stock Market', 'TSC', 85, 80);
  }

  toggleFavorite() {
    console.log('toggle Event');
    this.stock.favorite = !this.stock.favorite;
  }
}
