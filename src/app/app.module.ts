import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { HttpClientModule } from '@angular/common/http';

const appModules = [SidebarModule];
const mat = [
  MatButtonModule,
  MatIconModule,
  MatSidenavModule,
  MatToolbarModule,
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    appModules,
    ...mat,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
