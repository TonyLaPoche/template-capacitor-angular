import {Routes} from '@angular/router';

const homeRoutes: Routes = [
  {
    path: 'home',
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('./home.page').then(p => p.HomePage)
      }
    ]
  }
]

export default homeRoutes
