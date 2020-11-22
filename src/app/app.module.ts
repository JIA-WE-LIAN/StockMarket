import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StockItemComponent } from './stock/stock-item/stock-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateStockComponent } from './stock/create-stock/create-stock.component';

@NgModule({
  declarations: [
    AppComponent,
    StockItemComponent,
    CreateStockComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
