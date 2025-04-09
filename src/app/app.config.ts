import { provideAnimations } from '@angular/platform-browser/animations';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import {provideRouter} from '@angular/router';
import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import {routes} from './app.routes';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(),
    provideAnimations(),
    importProvidersFrom(NgbModule)
  ]


};
