import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { WavesModule, InputsModule, ButtonsModule } from 'angular-bootstrap-md'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router';


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
    MatToolbarModule
  ],
  exports: [NavbarComponent]
})
export class NavigationModule { }
