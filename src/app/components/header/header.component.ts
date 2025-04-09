import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <nav class="navbar navbar-expand-lg" style="background-color: #18446c;">
      <div class="container-fluid">
        <a class="navbar-brand" routerLink="/">
          <img src="https://www.itse.ac.pa/content/logo/logo_itse.svg" alt="ITSE Logo" width="350">
        </a>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      padding: 1rem 0;
    }
    .nav-link {
      color: white !important;
      font-weight: 500;
      margin: 0 10px;
    }
    .nav-link.active {
      color: #e2ba15 !important;
      border-bottom: 2px solid #e2ba15;
    }
    .navbar-toggler {
      border-color: rgba(255,255,255,0.5);
    }
  `]
})
export class HeaderComponent {
  isCollapsed = true; // Control para menú móvil
}
