import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortafolioComponent } from '../app/pages/portafolio/portafolio.component';
import { ItemComponent } from '../app/pages/item/item.component';
import { AboutComponent } from '../app/pages/about/about.component';
import { SearchComponent } from '../app/pages/search/search.component';


const routes: Routes = [
  { path: 'home', component: PortafolioComponent },
  { path: 'item/:id', component: ItemComponent },
  { path: 'about', component: AboutComponent },
  { path: 'search/:termino', component: SearchComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
