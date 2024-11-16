import {Routes} from "@angular/router";
import {TabsPage} from "./tabs.page";
import aboutRoute from '../../../views/about/about.route';
import mapRoute from '../../../views/map/map.route';
import homeRoutes from '../../../views/home/home.route';

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
