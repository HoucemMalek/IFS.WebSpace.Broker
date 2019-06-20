import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './shared/components';
import { AuthGuardService } from './shared/services';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { DxScrollViewModule } from 'devextreme-angular/ui/scroll-view';
import { DxDataGridModule, DxFormModule ,DxButtonModule ,DxToolbarModule, DxHtmlEditorModule, DxPopupModule, DxBoxModule, DxDateBoxModule, DxDropDownButtonModule,DxRangeSelectorModule , DxChartModule, DxPieChartModule} from 'devextreme-angular';
import { OrderBookComponent } from './pages/trading/order-book/order-book';

import { OrderHistoryComponent } from './pages/trading/order-history/order-history';
import { TransactionHistoryComponent } from './pages/account/transaction-history/transaction-history';
import { SessionComponent } from './pages/market/session/session';
import { OrderComponent } from './pages/trading/order/order';
import { InstrumentSummaryComponent } from './pages/market/instrument-summary/instrument-summary';
import { PortfolioComponent } from './pages/account/portfolio/portfolio';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';




const routes: Routes = [
  
  {
    path: 'page/carnet-ordres-bourse',
    component: OrderBookComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'page/portefeuille',
    component: PortfolioComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'page/historique-ordres-bourse',
    component: OrderHistoryComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'page/releve-compte',
    component: TransactionHistoryComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'marche-ligne/marche',
    component: SessionComponent,
    canActivate: [ AuthGuardService ]
  },
  
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'login-form',
    component: LoginFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: '**',
    redirectTo: 'home',
    canActivate: [ AuthGuardService ]
  },
  
];

@NgModule({
<<<<<<< HEAD
  imports: [RouterModule.forRoot(routes), DxDataGridModule,DxRangeSelectorModule,HttpClientModule, DxFormModule,DxChartModule , DxButtonModule,CommonModule,DxPopupModule,DxToolbarModule, DxHtmlEditorModule,DxBoxModule],
=======
  imports: [
    RouterModule.forRoot(routes),
    DxDataGridModule,
    DxRangeSelectorModule,
    DxFormModule,DxChartModule,
    DxButtonModule,
    CommonModule,
    DxPopupModule,
    DxToolbarModule,
    DxHtmlEditorModule,
    DxBoxModule,
    DxDropDownButtonModule,
    DxDateBoxModule,
    DxScrollViewModule,
    DxPieChartModule ],
>>>>>>> 8a1aabcf8ee26c586a0ed48eb7d5593666c70568
  providers: [AuthGuardService],
  exports: [RouterModule],
  declarations: [HomeComponent, OrderComponent, ProfileComponent, OrderBookComponent,PortfolioComponent, OrderHistoryComponent, TransactionHistoryComponent, SessionComponent,InstrumentSummaryComponent]
})
export class AppRoutingModule { }
