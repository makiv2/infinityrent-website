import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthModule } from './auth/auth.module';

const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
  { path: 'account', loadChildren: () => import('./account/account.module').then(m => m.AccountModule)},
  { path: 'register', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  { path: '**',   redirectTo: '', pathMatch: 'full' } // redirect to `first-component`
  // { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
