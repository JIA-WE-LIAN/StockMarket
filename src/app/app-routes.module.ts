import { AuthGuard } from './guards/auth.guard';
import { StockDetailsComponent } from './stock/stock-details/stock-details.component';
import { CreateStockComponent } from './stock/create-stock/create-stock.component';
import { StockListComponent } from './stock/stock-list/stock-list.component';
import { RegisterComponent } from './user/register/register.component';
import { LoginComponent } from './user/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'stocks/list', component: StockListComponent, canActivate: [AuthGuard]},
  {path: 'stocks/create', component: CreateStockComponent, canActivate: [AuthGuard]},
  {path: 'stock/:code', component: StockDetailsComponent, canActivate: [AuthGuard]},
  {path: '**', redirectTo: '/register'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
