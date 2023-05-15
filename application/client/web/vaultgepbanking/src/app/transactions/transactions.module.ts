import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TransactionsComponent } from './transactions.component';
import { NgxPlaidLinkModule } from 'ngx-plaid-link';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: TransactionsComponent,
  },
];

@NgModule({
  declarations: [TransactionsComponent],
  imports: [RouterModule.forChild(routes), CommonModule, HttpClientModule, NgxPlaidLinkModule],
})
export class TransactionsModule {}
