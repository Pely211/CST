import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { Project1Component } from './project1/project1.component';
import { Project2Component } from './project2/project2.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { Routes } from '@angular/router';
import { ItemManagerComponent } from './item-manager/item-manager.component';
import { RpgManagerRoutingModule } from './rpg-manager/rpg-manager-routing.module';
import { MainPageComponent } from './main-page/main-page.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import {MatDialogActions, MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { MatOptionSelectionChange } from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatTableModule} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Project1Component,
    Project2Component,
    ItemManagerComponent,
    MainPageComponent,
    RegistrationComponent,
    LoginComponent,
    LoginsuccessComponent,
    DialogComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatDividerModule,
    MatCardModule,
    MatBadgeModule,
    MatIconModule,
    RpgManagerRoutingModule,
    MatFormFieldModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule, 
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
