import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { ShipComponent } from './pages/ship/ship.component';

const routes:Routes=[
  {
   path:'',
   component:HomeComponent,
  children:[
    {
      path:'list',
      component:ListComponent
    },
    {
      path:'ship',
      component:ShipComponent
    },
    {
      path:'ship/:id',
      component:ShipComponent
    },
    {
      path:'**',
     redirectTo:'home'
    },
  ]
  }
];
@NgModule({
  declarations: [],
  imports: [
   RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class StarWarsRoutingModule { }
