import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-mapa',
  imports: [
    RouterModule,
    CommonModule,
    NgOptimizedImage
  ],
  template: `
    <div class="container-fluid content">
      <img ngSrc="assets/fotos/itseInstalacion1.jpg" alt="Mapa ITSE" class="background-image" width="1200" height="800" priority>

      <!-- Enlaces con eventos click modificados -->
      <a class="hover-label green" (click)="toggleInfo('innovacion')" (keydown.enter)="toggleInfo('innovacion')" tabindex="0">Escuela Innovación Digital</a>
      <a class="hover-label yellow" (click)="toggleInfo('negocios')" (keydown.enter)="toggleInfo('negocios')" tabindex="0">Escuela Negocios</a>
      <a class="hover-label red" (click)="toggleInfo('hospitalidad')" (keydown.enter)="toggleInfo('hospitalidad')" tabindex="0">Escuela Hospitalidad y Turismo</a>
      <a class="hover-label blue" (click)="toggleInfo('tecnologia')" (keydown.enter)="toggleInfo('tecnologia')" tabindex="0">Escuela Tecnología Industrial</a>

      <!-- Modales de información -->
      <div *ngIf="activeInfo === 'innovacion'" class="info-panel green-panel">
        <div class="info-header">
          <h3>Escuela de Innovación Digital</h3>
          <button class="close-btn" (click)="closeInfo()">×</button>
        </div>
        <div class="info-content">
          <p>La Escuela de Innovación Digital ofrece técnicos enfocados en áreas clave de la tecnología moderna,
            preparándote para los desafíos del futuro. Revisa los planes de estudio aquí:</p>
          <ul>
            <li> <a href="https://www.itse.ac.pa/content/page/file/1035/TS-BigData-d0f55666a650e4964ef69d2671835341.pdf">Técnico Superior en Big Data y Ciencia de Datos</a> </li>
            <li> <a href="https://www.itse.ac.pa/content/page/file/1035/TS-Ciberseguridad-d0f55666a650e4964ef69d2671835341.pdf">Técnico Superior en Ciberseguridad</a></li>
            <li> <a href="https://www.itse.ac.pa/content/page/file/1035/TS-DesarrolloSoftware-d0f55666a650e4964ef69d2671835341.pdf">Técnico Superior en Desarrollo de Software</a></li>
            <li> <a href="https://www.itse.ac.pa/files/Ts-Inteligencia%20Artifical-%20ITSE.pdf">Técnico Superior En Inteligencia Artificial</a></li>
          </ul>
          <a routerLink="/escuela/innovacion-digital" class="info-link">Ver más información</a>
        </div>
      </div>

      <div *ngIf="activeInfo === 'negocios'" class="info-panel yellow-panel">
        <div class="info-header">
          <h3>Escuela de Negocios</h3>
          <button class="close-btn" (click)="closeInfo()">×</button>
        </div>
        <div class="info-content">
          <p>La Escuela de Negocios prepara profesionales en administración, finanzas, marketing y emprendimiento.</p>
          <ul>
            <li>Administración Empresarial</li>
            <li>Marketing Digital</li>
            <li>Emprendimiento e Innovación</li>
          </ul>
          <a routerLink="/escuela/negocios" class="info-link">Ver más información</a>
        </div>
      </div>

      <div *ngIf="activeInfo === 'hospitalidad'" class="info-panel red-panel">
        <div class="info-header">
          <h3>Escuela de Hospitalidad y Turismo</h3>
          <button class="close-btn" (click)="closeInfo()">×</button>
        </div>
        <div class="info-content">
          <p>La Escuela de Hospitalidad y Turismo forma profesionales en gestión hotelera, turismo sostenible y gastronomía.</p>
          <ul>
            <li>Gestión Hotelera</li>
            <li>Turismo Sostenible</li>
            <li>Artes Culinarias</li>
          </ul>
          <a routerLink="/escuela/hospitalidad-turismo" class="info-link">Ver más información</a>
        </div>
      </div>

      <div *ngIf="activeInfo === 'tecnologia'" class="info-panel blue-panel">
        <div class="info-header">
          <h3>Escuela de Tecnología Industrial</h3>
          <button class="close-btn" (click)="closeInfo()">×</button>
        </div>
        <div class="info-content">
          <p>La Escuela de Tecnología Industrial ofrece programas en mecatrónica, automatización industrial y energías renovables.</p>
          <ul>
            <li>Mecatrónica</li>
            <li>Automatización Industrial</li>
            <li>Energías Renovables</li>
          </ul>
          <a routerLink="/escuela/tecnologia-industrial" class="info-link">Ver más información</a>
        </div>
      </div>
    </div>
  `,
  styleUrl: './mapa.component.css'
})
export class MapaComponent {
  activeInfo: string | null = null;

  toggleInfo(infoId: string) {
    if (this.activeInfo === infoId) {
      this.activeInfo = null;
    } else {
      this.activeInfo = infoId;
    }
  }

  closeInfo() {
    this.activeInfo = null;
  }
}
