import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-video-banner',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="video-container">
      <video #videoPlayer autoplay muted loop>
        <source src="assets/videos/Video-del-ITSE-WEB1-1.mp4" type="video/mp4">
      </video>
      <div class="video-overlay">
        <button class="btn btn-start btn-warning btn-lg" style="font-size: 26px; padding: 22px 42px;" >
          <a [routerLink]="['/mapa']" style="color: white; text-decoration: none;">Iniciar recorrido</a>
        </button>
      </div>
    </div>
  `,
  styles: [`
    .btn-start {
      background-color: #1e4a6d; /* Fondo azul oscuro */
      color: #ffffff; /* Texto en blanco */
      padding: 15px 30px; /* Aumenta el espacio interno para darle más tamaño */
      border: none; /* Sin borde */
      border-radius: 20px; /* Bordes redondeados */
      text-align: center; /* Centrar texto */
      font-weight: bold; /* Negrita para el texto */
      font-family: Arial, sans-serif; /* Fuente */
      transition: background-color 0.3s; /* Transición para hover */
    }

    .video-container {
      position:  relative;
      background-color: rgb(255, 255, 255);
      height: 95vh;
      min-height: 25rem;
      width: 100%;
      overflow: hidden;
      z-index:1;
    }
    video {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      min-width: 100%;
      min-height: 100%;
      object-fit: cover;
    }
    .video-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 140%;
      display: flex;
      justify-content: center;
      align-items: center;
      background: rgba(0, 0, 0, 0.4);
    }
  `]
})
export class VideoBannerComponent implements AfterViewInit {
  @ViewChild('videoPlayer') video!: ElementRef<HTMLVideoElement>;

  constructor(private router: Router) {}

  ngAfterViewInit() {
    const videoElement = this.video.nativeElement;

    videoElement.muted = true;

    videoElement.play().catch(e => {
      console.log('Autoplay prevented:', e);

      const overlay = document.querySelector('.video-overlay');
      if (overlay) {
        overlay.innerHTML += `
        <button class="btn btn-primary" id="playButton">Reproducir video</button>
      `;
        const playButton = document.getElementById('playButton');
        playButton?.addEventListener('click', () => {
          videoElement.play().catch(err => console.log('Error al reproducir:', err));
          playButton.remove(); // Elimina el botón después de la interacción
        });
      }
    });
  }

  navigateToMap() {
    console.log('Navegando a la página del mapa...');
    // Usar Location para cambiar la URL directamente
    window.location.href = window.location.origin + '/mapa';
  }
}
