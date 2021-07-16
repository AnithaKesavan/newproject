import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutmoduleModule } from '../app/components/layoutmodule/layoutmodule.module';
import { LayoutComponent } from './components/layoutmodule/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/apps',
        pathMatch: 'full'
      },
      {
        path: 'apps',
        loadChildren: () => import('../app/components/layoutmodule/layoutmodule.module').then((data) => { LayoutmoduleModule })
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
