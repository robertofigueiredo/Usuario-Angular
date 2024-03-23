import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { UsuarioService } from './services/usuario.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), 
              provideClientHydration(), 
              UsuarioService, 
              importProvidersFrom(HttpClientModule), 
              provideHttpClient(withFetch())]
};
