import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarWarsRoutingModule } from './star-wars-routing.module';

import { ListComponent } from './pages/list/list.component';
import { ShipComponent } from './pages/ship/ship.component';
import { HomeComponent } from './pages/home/home.component';
import { MaterialModule } from '../material/material.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';



@NgModule({
  declarations: [
    ListComponent,
    ShipComponent,
    HomeComponent,
   
  ],
  imports: [
    CommonModule,
    StarWarsRoutingModule,
    MaterialModule,
    InfiniteScrollModule
  ]
})
export class StarWarsModule { }
