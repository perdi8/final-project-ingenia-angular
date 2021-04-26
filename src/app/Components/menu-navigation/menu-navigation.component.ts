import { Component, DoCheck } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-navigation',
  templateUrl: './menu-navigation.component.html',
  styleUrls: ['./menu-navigation.component.scss'],
})
export class MenuNavigationComponent {
  mostrarMenu: any = true;

  listaEtiquetas: any = false;
  listaExpertos: any = false;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router
  ) {}

  ngDoCheck() {
    this.router.url == '/login'
      ? (this.mostrarMenu = false)
      : (this.mostrarMenu = true);
  }
}
