import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpertListPageComponent } from './Pages/expert-list-page/expert-list-page.component';

import { LoginPageComponent } from './Pages/login/login.component';
import { NotFoundPageComponent } from './Pages/not-found-page/not-found-page.component';

import { AuthGuard } from './Guard/guard.guard';
import { TagListComponent } from './Pages/tag-list/tag-list.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/login',
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'expertos',
    component: ExpertListPageComponent,
    // canActivate: [AuthGuard],
  },
  {
    path: 'etiquetas',
    component: TagListComponent,
    // canActivate: [AuthGuard],
  },
  {
    path: '**',
    component: NotFoundPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
