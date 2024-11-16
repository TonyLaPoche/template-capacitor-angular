# Angular Capacitor Tailwind Starter 🚀

**Un template GitHub prêt à l'emploi pour démarrer rapidement vos projets Angular avec Capacitor et Tailwind CSS.**

Ce projet inclut une structure modulaire et robuste, des routes paresseuses (`lazy loading`), et des outils modernes pour créer des applications web ou mobiles performantes.

---

## 🎯 Fonctionnalités principales

- **Framework Angular Standalone** : Simplifie la configuration et accélère le développement.
- **Intégration Capacitor** : Prêt pour le déploiement sur le web, Android, et iOS.
- **Stylisation avec Tailwind CSS** : Design réactif grâce à des breakpoints personnalisés pour mobile, tablette, bureau et grand bureau.
- **Système de navigation avec des onglets (Tabs)** : Trois routes principales :
  - **Home**
  - **Map**
  - **About**
- **Lazy Loading des modules** : Performances optimisées grâce au chargement à la demande des modules de routes.
- **Architecture propre** :
  - **`core/layout`** : Composants essentiels tels que les **Tabs** et le **Header**.
  - Header dynamique basé sur la route courante avec Ionic.

---

## 🛠️ Installation et Démarrage

1. Clonez ce dépôt :

   ```bash
   git clone https://github.com/TonyLaPoche/template-capacitor-angular.git
   cd template-capacitor-angular
   ```

2. Installez les dépendances :

   ```bash
   npm install
   ```

3. Lancez le serveur de développement :

   ```bash
   npm start # ou la commande ionic serve
   ```

4. (Optionnel) Ajoutez des plateformes Capacitor :

   ```bash
   npx cap add android
   npx cap add ios
   npx cap add electron
   ```

5. Construisez l'application pour Capacitor :

   ```bash
   npm run build
   npx cap copy
   ```

---

## 📂 Structure du Projet

### Routes principales et navigation

L'architecture de navigation repose sur un système modulaire. Voici un aperçu des fichiers de configuration des routes :

#### `app.routes.ts`

Ce fichier importe et fusionne les routes définies dans le composant Tabs.

```typescript
import {Routes} from '@angular/router';
import {tabsRoute} from './core/layout/tabs/tabs.route';

export const routes: Routes = [
  ...tabsRoute
];
```

#### `tabs.route.ts`

Le composant Tabs agit comme un conteneur pour les routes enfants, y compris `home`, `map`, et `about`.

```typescript
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
];
```

#### Exemple de route enfant : `home.route.ts`

```typescript
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
];

export default homeRoutes;
```

Ce même modèle est utilisé pour `about.route.ts` et `map.route.ts`.

---

### Composants principaux

#### `AppComponent`

Le composant racine intègre les autres composants clés : le `Header` et l'outlet des routes (`IonRouterOutlet`).

```typescript
import {ChangeDetectionStrategy, Component, inject, OnInit, signal} from '@angular/core';
import {IonApp, IonRouterOutlet} from "@ionic/angular/standalone";
import {HeaderComponent} from "./core/layout/header/header.component";
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    IonApp,
    HeaderComponent,
    IonRouterOutlet
  ],
  template: `
    <ion-app>
      <app-header [titlePage]="currentRoute()"></app-header>
      <ion-router-outlet></ion-router-outlet>
    </ion-app>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  currentRoute = signal<string>('');
  router = inject(Router);

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentRoute.set(event.urlAfterRedirects.slice(1));
        console.log('Route actuelle mise à jour :', event.urlAfterRedirects);
      }
    });
    this.currentRoute.set(this.router.url);
  }
}
```

#### `HeaderComponent`

Le composant Header affiche dynamiquement le titre de la page en fonction de la route actuelle.

**Fichier TypeScript :**

```typescript
import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {IonHeader, IonTitle, IonToolbar} from "@ionic/angular/standalone";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
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
```

**Fichier HTML :**

```html
<ion-header [translucent]="true">
  <ion-toolbar>
    <ion-title>{{ titlePage() }}</ion-title>
  </ion-toolbar>
</ion-header>
```

---

## 🌟 Développement avec Tailwind CSS

### Configuration Tailwind CSS

Tailwind CSS a été configuré pour inclure les fichiers sources Angular (HTML et TypeScript) dans la détection des classes. De plus, des breakpoints personnalisés sont définis pour différentes tailles d'écran :

**Fichier `tailwind.config.js` :**

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      screens: {
        mobile: "30rem", // 480px = 30rem (16px de base)
        tablet: "48rem", // 768px = 48rem
        desktop: "64rem", // 1024px = 64rem
        largeDesktop: "90rem", // 1440px = 90rem
      }
    },
  },
  plugins: [],
}
```

### Utilisation des breakpoints

Ces breakpoints permettent de styliser vos composants de manière responsive, en fonction de la taille de l'écran.

Exemple d'utilisation :

```html
<div class="bg-blue-500 mobile:bg-green-500 tablet:bg-yellow-500 desktop:bg-red-500 largeDesktop:bg-purple-500">
  Cette div change de couleur selon la taille de l'écran.
</div>
```

| **Breakpoint**  | **Classe**         | **Taille minimale**  |
|------------------|--------------------|-----------------------|
| Mobile          | `mobile:`         | `480px` (30rem)      |
| Tablette        | `tablet:`         | `768px` (48rem)      |
| Bureau          | `desktop:`        | `1024px` (64rem)     |
| Grand Bureau    | `largeDesktop:`   | `1440px` (90rem)     |

---

## 🤝 Contribuer

1. Forkez le projet.
2. Créez une branche (`git checkout -b feature/ma-nouvelle-fonctionnalite`).
3. Commitez vos modifications (`git commit -m "Ajoute une nouvelle fonctionnalité"`).
4. Poussez sur la branche (`git push origin feature/ma-nouvelle-fonctionnalite`).
5. Créez une Pull Request.

---

## 📜 Licence

Ce projet est sous licence MIT. Consultez le fichier [LICENSE](LICENSE) pour plus d'informations.
