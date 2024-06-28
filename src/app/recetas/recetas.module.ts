import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecetasRoutingModule } from './recetas-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';

import { RecetaPageComponent } from './pages/receta-page/receta-page.component';
import { HeaderComponent } from './components/header/header.component';
import { CardRecetaComponent } from './components/card-receta/card-receta.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { InitPageComponent } from './pages/init-page/init-page.component';
import { MapamundiComponent } from './components/mapamundi/mapamundi.component';
import { FormsModule } from '@angular/forms';
import { HamburguerComponent } from './components/hamburguer/hamburguer.component';
import { CookiesComponent } from './components/cookies/cookies.component';

@NgModule({
  declarations: [
    LayoutPageComponent,
    ListPageComponent,
    RecetaPageComponent,
    HeaderComponent,
    CardRecetaComponent,
    FooterComponent,
    SearchInputComponent,
    InitPageComponent,
    MapamundiComponent,
    HamburguerComponent,
    CookiesComponent,
  ],
  imports: [
    CommonModule,
    RecetasRoutingModule,
    FormsModule,
  ],
})
export class RecetasModule { }
