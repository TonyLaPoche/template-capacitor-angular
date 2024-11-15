import {TestBed} from '@angular/core/testing';
import {provideRouter} from '@angular/router';

import {TabsPage} from './tabs.page';

describe('TabsPage', () => {
    fit('should create', () => {
        const {fixture, debugEl} = setup()
        expect(debugEl).toBeTruthy();
    });
});

function setup() {
    TestBed.configureTestingModule({
        imports: [TabsPage],
        providers: [provideRouter([])]
    })
    const fixture = TestBed.createComponent(TabsPage);
    const debugEl = fixture.debugElement;
    return {fixture, debugEl};
}