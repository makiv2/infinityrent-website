import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { CheckboxModule, WavesModule, ButtonsModule, InputsModule, IconsModule, CardsModule, InputUtilitiesModule } from 'angular-bootstrap-md'

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    AuthRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    CheckboxModule,
    WavesModule,
    ButtonsModule,
    InputsModule,
    InputUtilitiesModule,
    IconsModule,
    CardsModule
  ],
})
export class AuthModule {}
