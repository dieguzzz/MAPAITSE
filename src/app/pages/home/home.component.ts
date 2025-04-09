import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoBannerComponent } from '../../components/video-banner/video-banner.component';
import { NewsSectionComponent } from '../../components/news-section/news-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, VideoBannerComponent, NewsSectionComponent],
  template: `
    <app-video-banner></app-video-banner>
    <app-news-section></app-news-section>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {}
