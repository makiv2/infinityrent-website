import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/auth/services/token-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private tokenStorageService: TokenStorageService) { 

  }

  logout(): void {
    this.tokenStorageService.signOut();
  }

  isLoggedIn(): boolean {
    return this.tokenStorageService.isLoggedIn();
  }
  
}


