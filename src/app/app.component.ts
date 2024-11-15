import {ChangeDetectionStrategy, Component, inject, OnInit, signal} from '@angular/core';
import {IonApp} from "@ionic/angular/standalone";
import {MainComponent} from "./core/layout/main/main.component";
import {HeaderComponent} from "./core/layout/header/header.component";
import {FooterComponent} from "./core/layout/footer/footer.component";
import {Router, NavigationEnd} from "@angular/router";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        IonApp,
        MainComponent,
        HeaderComponent,
        FooterComponent
    ],
    template: `
        <ion-app>
            <app-header [titlePage]="currentRoute()"></app-header>
            <app-main></app-main>
            <app-footer></app-footer>
        </ion-app>
    `,
    styles: ``,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit{
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
