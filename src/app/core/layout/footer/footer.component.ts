import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TabsPage} from "../tabs/tabs.page";

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    standalone: true,
    imports: [
        TabsPage
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {

}
