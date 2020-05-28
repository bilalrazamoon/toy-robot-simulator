import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ToyRobot, Facing, Value } from './toy-robot';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  toyRobot: ToyRobot;

  form = new FormGroup({
    x: new FormControl('', [
      Validators.required,
      Validators.min(0),
      Validators.max(4),
    ]),
    y: new FormControl('', [
      Validators.required,
      Validators.min(0),
      Validators.max(4),
    ]),
    facing: new FormControl('', Validators.required),
  });

  facings = [
    { value: Facing.East, viewValue: 'East' },
    { value: Facing.West, viewValue: 'West' },
    { value: Facing.North, viewValue: 'North' },
    { value: Facing.South, viewValue: 'South' },
  ];

  constructor() {
    this.toyRobot = new ToyRobot();
  }

  place() {
    const value = this.form.value as Value;
    const { x, y, facing } = value;
    this.toyRobot.place(x, y, facing);
    this.form.reset();
  }

  move() {
    try {
      this.toyRobot.move();
    } catch (error) {
      alert(error.message);
    }
  }

  left() {
    try {
      this.toyRobot.left();
    } catch (error) {
      alert(error.message);
    }
  }

  right() {
    try {
      this.toyRobot.right();
    } catch (error) {
      alert(error.message);
    }
  }

  report() {
    try {
      const value = this.toyRobot.report();
      alert(`X: ${value.x}, Y: ${value.y} and Facing: ${value.facing}`);
    } catch (error) {
      alert(error.message);
    }
  }
}
