import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ToyRobot, Facing, Value, SIZE } from './toy-robot';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  toyRobot: ToyRobot;

  rows: number[][] = Array(SIZE).fill(Array(SIZE).fill(false));

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

  get _objectTransformStyle() {
    let degree = 0;

    if (this.toyRobot) {
      const facing = this.toyRobot.facing;
      if (facing === Facing.North) {
        degree = -90;
      } else if (facing === Facing.South) {
        degree = 90;
      } else if (facing === Facing.East) {
        degree = 0;
      } else if (facing === Facing.West) {
        degree = 180;
      }
    }

    return `transform: rotate(${degree}deg)`;
  }

  constructor() {
    this.toyRobot = new ToyRobot();
  }

  place() {
    const value = this.form.value as Value;
    const { x, y, facing } = value;
    this.toyRobot.place(x, y, facing);
    this.form.reset();
    this._updateTable();
  }

  move() {
    try {
      this.toyRobot.move();
      this._updateTable();
    } catch (error) {
      alert(error.message);
    }
  }

  left() {
    try {
      this.toyRobot.left();
      this._updateTable();
    } catch (error) {
      alert(error.message);
    }
  }

  right() {
    try {
      this.toyRobot.right();
      this._updateTable();
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

  private _updateTable() {
    const { x, y } = this.toyRobot;
    const rows = this.rows.map(() => Array(SIZE).fill(false));
    rows[SIZE - 1 - y][x] = true;
    this.rows = rows;
  }
}
