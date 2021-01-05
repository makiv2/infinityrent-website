import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from '../auth/register/register.component';
import { AccountComponent } from './account.component';

const routes: Routes = [
  { path: '',  component: AccountComponent },
  { path: 'register',  component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class AccountRoutingModule {}
