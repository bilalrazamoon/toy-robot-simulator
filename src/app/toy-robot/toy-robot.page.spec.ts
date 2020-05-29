import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ToyRobotPage } from './toy-robot.page';

describe('ToyRobotPage', () => {
  let component: ToyRobotPage;
  let fixture: ComponentFixture<ToyRobotPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ToyRobotPage],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(ToyRobotPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
