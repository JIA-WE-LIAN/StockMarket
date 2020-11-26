import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StockService } from 'src/app/services/stock.service';

import { Stock } from '../../model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent {

  @Input() public stock: Stock;

  constructor(private stockService: StockService) {}

  onToggleFavorite(event) {
    this.stockService.toggleFavorite(this.stock)
      .subscribe((stock) => this.stock.favorite = !this.stock.favorite);
  }
}
