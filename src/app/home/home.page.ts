import { Component } from '@angular/core';

import { ToyRobot, Facing } from './toy-robot';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  toyRobot: ToyRobot;

  constructor() {
    this.toyRobot = new ToyRobot();

    // temp
    (window as any).ToyRobot = this.toyRobot;
    (window as any).ToyRobotFacing = Facing;
  }
}
