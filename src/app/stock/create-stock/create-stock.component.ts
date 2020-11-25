import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/model/stock';
import { MessageService } from 'src/app/services/message.service';
import { StockService } from 'src/app/services/stock.service';

@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.css']
})
export class CreateStockComponent {

  public stock: Stock;
  public confirmed = false;
  public exchanges = ['NYSE', 'NASDAQ', 'OTHER'];
  constructor(private stockService: StockService,
              public messageService: MessageService) {
    this.stock =  new Stock('', '', 0, 0, 'NASDAQ');
    this.messageService.message = 'Component Level: Hello Message Service';
  }

  setStockPrice(price) {
    this.stock.price = price;
    this.stock.previousPrice = price;
  }

  createStock(stockForm) {
    if (stockForm.valid) {
      let created = this.stockService.createStock(this.stock);
      if (created) {
        this.messageService.message =
            'Successfully created stock with stock code: ' +
            this.stock.code;
        this.stock =  new Stock('', '', 0, 0, 'NASDAQ');
      } else {
        this.messageService.message = 'Stock with stock code: ' +
            this.stock.code + ' already exists';
      }
    } else {
      console.error('Stock form is in an invalid state');
    }
  }
}
