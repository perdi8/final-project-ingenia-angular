import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-expert-list-page',
  templateUrl: './expert-list-page.component.html',
  styleUrls: ['./expert-list-page.component.scss'],
})
export class ExpertListPageComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );
  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    console.log(
      `sesion storage pagina expertos  ${sessionStorage.getItem('Bearer ')}`
    );
  }
}
