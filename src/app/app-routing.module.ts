import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'toy-robot',
    loadChildren: () =>
      import('./toy-robot/toy-robot.module').then((m) => m.ToyRobotPageModule),
  },
  {
    path: '',
    redirectTo: 'toy-robot',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
