import { ToyRobot, Facing } from './toy-robot';

describe('ToyRobot', () => {
  let toyRobot: ToyRobot;

  beforeEach(() => {
    toyRobot = new ToyRobot();
  });

  it('should create', () => {
    expect(toyRobot).toBeTruthy();
  });

  it('should start from 0, 0 and North and end to 0, 1 and North', () => {
    toyRobot.place(0, 0, Facing.North);
    toyRobot.move();
    toyRobot.report();
    expect(toyRobot.x).toEqual(0);
    expect(toyRobot.y).toEqual(1);
    expect(toyRobot.facing).toEqual(Facing.North);
  });

  it('should start from 0, 0 and North and end to 0, 0 and West', () => {
    toyRobot.place(0, 0, Facing.North);
    toyRobot.left();
    toyRobot.report();
    expect(toyRobot.x).toEqual(0);
    expect(toyRobot.y).toEqual(0);
    expect(toyRobot.facing).toEqual(Facing.West);
  });

  it('should start from 1, 2 and East and end to 3, 3 and North', () => {
    toyRobot.place(1, 2, Facing.East);
    toyRobot.move();
    toyRobot.move();
    toyRobot.left();
    toyRobot.move();
    toyRobot.report();
    expect(toyRobot.x).toEqual(3);
    expect(toyRobot.y).toEqual(3);
    expect(toyRobot.facing).toEqual(Facing.North);
  });
});
