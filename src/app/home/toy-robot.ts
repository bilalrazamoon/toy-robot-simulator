export enum Facing {
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

export class ToyRobot {
  placed = false;

  x: number;
  y: number;
  facing: Facing;

  constructor() {}

  place(x: number, y: number, facing: Facing): void {
    this.placed = true;

    this.x = x;
    this.y = y;
    this.facing = facing;
  }

  move(): void {
    if (!this.placed) {
      throw Error('Place object first!');
    }

    const facing = this.facing;

    let { x, y } = this;

    if (facing === Facing.North || facing === Facing.South) {
      this.y =
        facing === Facing.North ? Math.min(++y, SIZE - 1) : Math.max(--y, 0);
    } else if (facing === Facing.East || facing === Facing.West) {
      this.x =
        facing === Facing.East ? Math.min(++x, SIZE - 1) : Math.max(--x, 0);
    }
  }

  left(): void {
    this._turn(Direction.Left);
  }

  right() {
    this._turn(Direction.Right);
  }

  report(): void {
    if (!this.placed) {
      throw Error('Place object first!');
    }

    const { x, y, facing } = this;

    console.log({ x, y, facing });
  }

  private _turn(direction: Direction): void {
    if (!this.placed) {
      throw Error('Place object first!');
    }

    const facing = this.facing;
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

    this.facing = newFacing;
  }
}
