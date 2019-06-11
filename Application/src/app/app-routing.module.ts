import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './shared/components';
import { AuthGuardService } from './shared/services';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { DisplayDataComponent } from './pages/display-data/display-data.component';
import { DxDataGridModule, DxFormModule ,DxButtonModule } from 'devextreme-angular';
import { CarnetOrdresBourseComponent } from './pages/carnet-ordres-bourse/carnet-ordres-bourse.component';
import { MarcheComponent } from './pages/marche-ligne/marche/marche.component';
import { FavorisComponent } from './pages/marche-ligne/favoris/favoris.component';
import { HistoriqueOrdresBourseComponent } from './pages/historique-ordres-bourse/historique-ordres-bourse.component';
import { ReleveCompteComponent } from './pages/releve-compte/releve-compte.component';
import { PortefeuilleComponent } from './pages/portefeuille/portefeuille.component';
import { MarchePrimaireComponent } from './pages/marche-primaire/marche-primaire.component';



const routes: Routes = [
  {
    path: 'display-data',
    component: DisplayDataComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'page/carnet-ordres-bourse',
    component: CarnetOrdresBourseComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'page/portefeuille',
    component: PortefeuilleComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'page/marche-primaire',
    component: MarchePrimaireComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'page/historique-ordres-bourse',
    component: HistoriqueOrdresBourseComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'page/releve-compte',
    component: ReleveCompteComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'marche-ligne/marche',
    component: MarcheComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'marche-ligne/favoris',
    component: FavorisComponent,
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
  imports: [RouterModule.forRoot(routes), DxDataGridModule, DxFormModule, DxButtonModule],
  providers: [AuthGuardService],
  exports: [RouterModule],
  declarations: [HomeComponent, ProfileComponent, DisplayDataComponent, ReleveCompteComponent, MarcheComponent, MarchePrimaireComponent, PortefeuilleComponent, FavorisComponent, CarnetOrdresBourseComponent, HistoriqueOrdresBourseComponent]
})
export class AppRoutingModule { }
