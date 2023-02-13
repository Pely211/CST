import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RpgManagerRoutingModule } from './rpg-manager-routing.module';

import { MatToolbarModule } from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';

import { Routes } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RpgManagerRoutingModule,
    MatToolbarModule,
    MatDividerModule,
    MatCardModule,
    MatBadgeModule,
    MatIconModule,
    MatFormFieldModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
  ]
})
export class RpgManagerModule { }
