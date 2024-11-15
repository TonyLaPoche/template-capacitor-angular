import {Routes} from "@angular/router";
import {TabsPage} from "./tabs.page";

export const tabsRoute: Routes = [
    {
        path: '',
        component: TabsPage,
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                loadComponent: () => import('../../../views/home/home.page').then(p => p.HomePage)
            },
            {
                path: 'about',
                loadComponent: () => import('../../../views/about/about.page').then(p => p.AboutPage)
            },
            {
                path: 'map',
                loadComponent: () => import('../../../views/map/map.page').then(p => p.MapPage)
            }
        ]
    }
]