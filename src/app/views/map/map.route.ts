import {Routes} from '@angular/router';

const mapRoute: Routes = [
  {
    path: 'map',
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('./map.page').then(p => p.MapPage)
      }
    ]
  }
]

export default mapRoute;
