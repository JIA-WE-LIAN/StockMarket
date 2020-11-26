import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Stock } from 'src/app/model/stock';
import { StockService } from 'src/app/services/stock.service';
import { UserStoreService } from '../../services/user-store.service';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {

  public stocks$: Observable<Stock[]>;
  constructor(private stockService: StockService, private userStore: UserStoreService) { }

  ngOnInit() {
    this.stocks$ = this.stockService.getStocks();
  }
}
