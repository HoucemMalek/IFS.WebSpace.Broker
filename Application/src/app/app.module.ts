import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SideNavOuterToolbarModule, SideNavInnerToolbarModule, SingleCardModule } from './layouts';
import { FooterModule, LoginFormModule } from './shared/components';
import { AuthService, ScreenService, AppInfoService } from './shared/services';
import { AppRoutingModule } from './app-routing.module';
import { SessionStore } from './pages/market/session/session.store';
import { PortfolioStore } from './pages/account/portfolio/portfolio.store';
import { TransactionHistoryStore } from './pages/account/transaction-history/transaction-history.store';
import { OrderStore } from './pages/trading/order/order.store';
import { OrderHistoryStore } from './pages/trading/order-history/order-history.store';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';




@NgModule({
  declarations: [
    AppComponent,

    
    
    
    
  ],
  imports: [
    BrowserModule,
    SideNavOuterToolbarModule,
    SideNavInnerToolbarModule,
    SingleCardModule,
    FooterModule,
    LoginFormModule,
    AppRoutingModule,
  
    
  ],
  providers: [AuthService, ScreenService, AppInfoService, SessionStore,PortfolioStore,TransactionHistoryStore,OrderStore,OrderHistoryStore],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
