import {ChangeDetectionStrategy, Component} from '@angular/core';
import {IonRouterOutlet} from "@ionic/angular/standalone";

@Component({
  selector: 'app-main',
  template: `
    <main>
      <ion-router-outlet></ion-router-outlet>
    </main>
  `,
  styles: ``,
  standalone: true,
  imports: [
    IonRouterOutlet
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent {
}
