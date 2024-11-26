import {ChangeDetectionStrategy, Component} from '@angular/core';
import {IonIcon, IonLabel, IonTabBar, IonTabButton, IonTabs} from '@ionic/angular/standalone';
import {addIcons} from 'ionicons';
import {flameOutline, peopleOutline} from 'ionicons/icons';

@Component({
    selector: 'app-tabs',
    templateUrl: './tabs.page.html',
    styleUrls: ['./tabs.page.scss'],
    imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabsPage {

    constructor() {
        addIcons({peopleOutline, flameOutline});
    }

}
