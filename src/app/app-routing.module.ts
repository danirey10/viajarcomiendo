import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { isNotAuthenticatedGuard } from './auth/guards/is-not-authenticated.guard';
import { AvisoLegalComponent } from './legal/aviso-legal/aviso-legal.component';
import { PoliticaPrivacidadComponent } from './legal/politica-privacidad/politica-privacidad.component';

const routes: Routes = [
  {
    path:'auth',
    loadChildren: () => import('./auth/auth.module').then( m=> m.AuthModule ),
  },
  {
    path:'recetas',
    loadChildren:() => import('./recetas/recetas.module').then(m => m.RecetasModule),
  },
  {
    path:'aviso-legal',
    component:AvisoLegalComponent,
  },
  {
    path:'politica-privacidad',
    component:PoliticaPrivacidadComponent,
  },
  {
    path:'',
    redirectTo:'recetas',
    pathMatch:'full'
  },
  {
    path:'**',
    redirectTo:'recetas'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
