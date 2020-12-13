import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { NavigationModule } from '../navigation/navigation.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    HomeRoutingModule,
    NavigationModule
  ]
})
export class HomeModule { }
