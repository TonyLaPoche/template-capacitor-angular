import {ChangeDetectionStrategy, Component, inject, OnInit, signal} from '@angular/core';
import {IonApp, IonRouterOutlet} from "@ionic/angular/standalone";
import {HeaderComponent} from "./core/layout/header/header.component";
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    IonApp,
    HeaderComponent,
    IonRouterOutlet
  ],
  template: `
    <ion-app>
      <app-header [titlePage]="currentRoute()"></app-header>
          <ion-router-outlet></ion-router-outlet>
    </ion-app>
  `,
  styles: `
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  currentRoute = signal<string>('');
  router = inject(Router);

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentRoute.set(event.urlAfterRedirects.slice(1));
        console.log('Route actuelle mise à jour :', event.urlAfterRedirects);
      }
    });
    this.currentRoute.set(this.router.url);
  }
}
