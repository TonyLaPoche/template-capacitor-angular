import {Routes} from '@angular/router';

const aboutRoute: Routes = [
  {
    path: 'about',
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('./about.page').then(p => p.AboutPage)
      }
    ]
  }
]

export default aboutRoute
