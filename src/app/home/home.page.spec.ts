import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomePage, Facing } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start from 0, 0 and North and end to 0, 1 and North', () => {
    component.place(0, 0, Facing.North);
    component.move();
    component.report();
    expect(component.object).toEqual({ x: 0, y: 1, facing: Facing.North });
  });

  it('should start from 0, 0 and North and end to 0, 0 and West', () => {
    component.place(0, 0, Facing.North);
    component.left();
    component.report();
    expect(component.object).toEqual({ x: 0, y: 0, facing: Facing.West });
  });

  it('should start from 1, 2 and East and end to 3, 3 and North', () => {
    component.place(1, 2, Facing.East);
    component.move();
    component.move();
    component.left();
    component.move();
    component.report();
    expect(component.object).toEqual({ x: 3, y: 3, facing: Facing.North });
  });
});
