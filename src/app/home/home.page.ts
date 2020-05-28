import { Component } from '@angular/core';

enum Facing {
  East = 'east',
  West = 'west',
  North = 'north',
  South = 'south',
}

enum Direction {
  Left,
  Right,
}

const FACINGS = [Facing.East, Facing.North, Facing.West, Facing.South];

const SIZE = 5;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  object: {
    x: number;
    y: number;
    facing: Facing;
  } = null;

  constructor() {
    // temp
    (window as any).ToyRobotSimulator = this;
    (window as any).ToyRobotSimulatorFacing = Facing;
  }

  place(x: number, y: number, facing: Facing): void {
    this.object = { x, y, facing };
  }

  move(): void {
    if (!this.object) {
      throw Error('Place object first!');
    }

    const facing = this.object.facing;

    let x = this.object.x;
    let y = this.object.y;

    if (facing === Facing.North || facing === Facing.South) {
      this.object = {
        ...this.object,
        y: facing === Facing.North ? Math.min(++y, SIZE - 1) : Math.max(--y, 0),
      };
    } else if (facing === Facing.East || facing === Facing.West) {
      this.object = {
        ...this.object,
        x: facing === Facing.East ? Math.min(++x, SIZE - 1) : Math.max(--x, 0),
      };
    }
  }

  left(): void {
    this._turn(Direction.Left);
  }

  right() {
    this._turn(Direction.Right);
  }

  report(): void {
    if (!this.object) {
      throw Error('Place object first!');
    }

    console.log(this.object);
  }

  private _turn(direction: Direction): void {
    if (!this.object) {
      throw Error('Place object first!');
    }

    const facing = this.object.facing;
    const facingIndex = FACINGS.indexOf(facing);

    let newFacingIndex =
      direction === Direction.Left ? facingIndex + 1 : facingIndex - 1;

    if (newFacingIndex > FACINGS.length - 1) {
      newFacingIndex = 0;
    }
    if (newFacingIndex < 0) {
      newFacingIndex = FACINGS.length - 1;
    }

    const newFacing = FACINGS[newFacingIndex];

    this.object = {
      ...this.object,
      facing: newFacing,
    };
  }
}
