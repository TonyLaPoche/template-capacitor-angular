import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {IonHeader, IonTitle, IonToolbar} from "@ionic/angular/standalone";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    imports: [
        IonHeader,
        IonToolbar,
        IonTitle
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
    titlePage = input<string>('');

}
