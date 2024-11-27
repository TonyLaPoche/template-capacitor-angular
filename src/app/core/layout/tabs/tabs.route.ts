import {Routes} from "@angular/router";
import {TabsPage} from "./tabs.page";
import aboutRoute from '../../../pages/about/about.route';
import mapRoute from '../../../pages/map/map.route';
import homeRoutes from '../../../pages/home/home.route';

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
      ...homeRoutes,
      ...aboutRoute,
      ...mapRoute,
    ]
  }
]
