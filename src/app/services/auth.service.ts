// auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private userData: any = null;

  login(userData: any) {
    this.userData = userData;
    localStorage.setItem('userData', JSON.stringify(userData));
  }

  logout() {
    localStorage.removeItem('userData');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('userData');
  }
}
