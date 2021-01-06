import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { WavesModule, InputsModule, ButtonsModule, IconsModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';



@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    WavesModule,
    InputsModule,
    ButtonsModule,
    RouterModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    IconsModule,
    MatToolbarModule,
    MatMenuModule
    
  ],
  exports: [NavbarComponent]
})
export class NavigationModule { }
