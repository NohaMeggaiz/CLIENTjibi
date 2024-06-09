import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './components/login/login.component';
import { ContactComponent } from './components/contact/contact.component';
import { PostLoginComponent } from './components/post-login/post-login.component';
import { FactureFormComponent } from './components/facture-form/facture-form.component';
import { EffectuerpaiementComponent } from './components/effectuerpaiement/effectuerpaiement.component';
import { RecapitulatifComponent } from './components/recapitulatif/recapitulatif.component';
import { ServicesComponent } from './components/services/services.component';
import { AboutUSComponent } from './about-us/about-us.component';
const routes: Routes = [
  {path:'',component:WelcomeComponent},
  {path:'home',component:WelcomeComponent},
  {path:'login', component:LoginComponent},
  {path:'contact',component:ContactComponent},
  {path:'post',component:PostLoginComponent},
  { path: 'effectuer-paiement/:id', component: EffectuerpaiementComponent },
  { path: 'facture-form', component: FactureFormComponent },
  { path: 'recapitulatif', component: RecapitulatifComponent },
  {path:'services',component:ServicesComponent},
  {path:'about',component:AboutUSComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
