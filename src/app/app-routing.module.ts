import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';
import { ErrorPagComponent } from './shared/error-pag/error-pag.component';
// import { AuthGuard } from './auth/guards/auth.guard';

const routes: Routes = [
  {
   path:'auth',
   loadChildren:() =>import('./auth/auth.module').then(m => m.AuthModule),
  },
  {
    path:'star-wars',
    loadChildren:() =>import('./star-wars/star-wars.module').then(m => m.StarWarsModule),
    canLoad:[ AuthGuard],
    canActivate:[AuthGuard]
   },
  {
     path:'404',
     redirectTo:'auth/login'
  },
  {
    path:'**',
    redirectTo:'auth/login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
