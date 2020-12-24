import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { NavigationModule } from '../navigation/navigation.module';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { CarouselModule, WavesModule } from 'angular-bootstrap-md'
import { CategorybarComponent } from './categorybar/categorybar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';




@NgModule({
  declarations: [
      HomeComponent,
      SlideshowComponent,
      CategorybarComponent
    ],
  imports: [
    HomeRoutingModule,
    MatIconModule,
    CarouselModule,
    WavesModule,
    MatButtonModule,
    NavigationModule
    
  ]
})
export class HomeModule { }
