import { Component } from '@angular/core';
import { Router, RouterEvent, NavigationStart, NavigationEnd, NavigationCancel, NavigationError, RouterOutlet } from '@angular/router';
import { ROUTE_ANIMATION } from './app.animation';
@Component({
  animations: [ROUTE_ANIMATION],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Gurupungav Narayanan';

  loaded: boolean = false;

  constructor(private router: Router) {
    router.events.subscribe((routerEvent: RouterEvent) => {
      this.checkRouterEvent(routerEvent);
    });
  }

  getRouteAnimation(outlet: RouterOutlet): string {
    return outlet
      && outlet.activatedRouteData
      && outlet.activatedRouteData.label;
  }

  checkRouterEvent(routerEvent: RouterEvent): void {
    if (routerEvent instanceof NavigationStart) {
      this.loaded = false;
    }

    if (routerEvent instanceof NavigationEnd ||
      routerEvent instanceof NavigationCancel ||
      routerEvent instanceof NavigationError) {
      this.loaded = true;
    }
  }
}
