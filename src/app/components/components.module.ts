import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UiModule} from '../modules/ui/ui.module';
import {DashBoxItemComponent} from './dash-box-item/dash-box-item.component';
import {DashBoxComponent} from './dash-box/dash-box.component';
import { FormsModule } from '@angular/forms';
import { DashPageComponent } from './dash-page/dash-page.component';
import { DashBoardContentComponent } from './dash-board-content/dash-board-content.component';
import { Navbar1Component } from './navbar1/navbar1.component';

@NgModule({
  declarations: [
    DashBoxComponent,
    DashBoxItemComponent,
    DashPageComponent,
    DashBoardContentComponent,
    Navbar1Component,
  ],
  imports: [
    CommonModule,
    UiModule,
    FormsModule
  ],
  exports: [
    DashBoxComponent,
    DashBoxItemComponent,
    DashPageComponent,
    Navbar1Component,
  ]
})
export class ComponentsModule { }
