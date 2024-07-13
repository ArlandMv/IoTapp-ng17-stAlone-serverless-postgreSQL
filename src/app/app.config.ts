import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    //provideHttpClient(withInterceptors([loadingInterceptor])),
    importProvidersFrom(NgxSpinnerModule.forRoot()),

    //importProvidersFrom(YYY.forRoot()),

    importProvidersFrom([BrowserAnimationsModule]),
  ],
};
//
