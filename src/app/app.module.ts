import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './Pages/login/login.component';
import { NotFoundPageComponent } from './Pages/not-found-page/not-found-page.component';
import { ExpertDetailComponent } from './Pages/expert-detail/expert-detail.component';
import { TagListComponent } from './Pages/tag-list/tag-list.component';
import { NewTagComponent } from './Pages/new-tag/new-tag.component';
import { ExpertListPageComponent } from './Pages/expert-list-page/expert-list-page.component';
import { ExpertListComponent } from './Views/expert-list/expert-list.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MenuNavigationComponent } from './Components/menu-navigation/menu-navigation.component';
import { TableExpertListComponent } from './Components/table-expert-list/table-expert-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';

import { MatTabsModule } from '@angular/material/tabs';
import { NewExpertComponent } from './Pages/new-expert/new-expert.component';
import { TagListViewComponent } from './Views/tag-list-view/tag-list-view.component';

import { MatDialogModule } from '@angular/material/dialog';
import { DialogDeleteTagComponent } from './Components/dialog-delete-tag/dialog-delete-tag.component';
import { HeaderComponent } from './Components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    NotFoundPageComponent,
    ExpertListPageComponent,
    ExpertDetailComponent,
    TagListComponent,
    NewTagComponent,
    ExpertListComponent,
    MenuNavigationComponent,
    TableExpertListComponent,
    NewExpertComponent,
    TagListViewComponent,
    DialogDeleteTagComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    MatChipsModule,
    MatTabsModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
