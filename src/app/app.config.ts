import {ApplicationConfig} from '@angular/core';
import {provideRouter, RouteReuseStrategy, withComponentInputBinding} from '@angular/router';

import {routes} from './app.route';
import {IonicRouteStrategy, provideIonicAngular} from '@ionic/angular/standalone';

export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy
    },
    provideIonicAngular({
        mode: "md"
      }
    ),
    provideRouter(routes, withComponentInputBinding())
  ]
};
