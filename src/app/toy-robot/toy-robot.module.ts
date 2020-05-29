import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToyRobotPage } from './toy-robot.page';

import { ToyRobotPageRoutingModule } from './toy-robot-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ToyRobotPageRoutingModule,
  ],
  declarations: [ToyRobotPage],
})
export class ToyRobotPageModule {}
