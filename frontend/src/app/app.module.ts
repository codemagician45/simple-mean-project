import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { HomeComponent } from './components/layouts/home/home.component';
import { TopBtnComponent } from './components/components/top-btn/top-btn.component';

import { CarouselModule, ButtonsModule, WavesModule, CollapseModule } from 'angular-bootstrap-md';
import { TabsComponent } from './components/components/tabs/tabs.component';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, /* other http imports */ } from "@angular/common/http";
import { ApiService } from "../app/services/api.service";
import { MatDialogModule } from '@angular/material/dialog';
import { DialogTestComponent } from './components/components/dialog-test/dialog-test.component';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    TopBtnComponent,
    TabsComponent,
    DialogTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonsModule,
    WavesModule,
    CollapseModule,
    MatTabsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule,
    MatRadioModule,
    FormsModule,
    MatSelectModule,
    CarouselModule
  ],
  entryComponents: [
    DialogTestComponent,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
