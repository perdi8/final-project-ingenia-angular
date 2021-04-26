import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpertListPageComponent } from './Pages/expert-list-page/expert-list-page.component';

import { LoginPageComponent } from './Pages/login/login.component';
import { NotFoundPageComponent } from './Pages/not-found-page/not-found-page.component';

import { AuthGuard } from './Guard/guard.guard';
import { TagListComponent } from './Pages/tag-list/tag-list.component';
import { ExpertDetailComponent } from './Pages/expert-detail/expert-detail.component';
import { NewExpertComponent } from './Pages/new-expert/new-expert.component';
import { NewTagComponent } from './Pages/new-tag/new-tag.component';

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
    canActivate: [AuthGuard],
  },
  {
    path: 'expertos/:id',
    component: ExpertDetailComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'newExperto',
    component: NewExpertComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'newEtiqueta',
    component: NewTagComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'etiquetas',
    component: TagListComponent,
    canActivate: [AuthGuard],
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
