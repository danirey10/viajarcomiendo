import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { RecetaPageComponent } from './pages/receta-page/receta-page.component';
import { InitPageComponent } from './pages/init-page/init-page.component';

const routes: Routes = [
  {
    path:'',
    component:LayoutPageComponent,
    children:[
      {
        path:'',
        component:InitPageComponent
      },
      {
        path:'list',
        component:ListPageComponent,
      },
      {
        path:':id',
        component:RecetaPageComponent,
      },
      {
        path:'**',
        redirectTo:'',
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecetasRoutingModule { }
