import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToyRobotPage } from './toy-robot.page';

const routes: Routes = [
  {
    path: '',
    component: ToyRobotPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToyRobotPageRoutingModule {}
