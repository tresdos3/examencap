import { Carpeta1Component } from './carpeta1/carpeta1.component';
import { Carpeta2Component } from './carpeta2/carpeta2.component';
import { Carpeta3Component } from './carpeta3/carpeta3.component';
import { Carpeta4Component } from './carpeta4/carpeta4.component';
import { Carpeta5Component } from './carpeta5/carpeta5.component';
import { Carpeta6Component } from './carpeta6/carpeta6.component';
import { Carpeta7Component } from './carpeta7/carpeta7.component';
import { Carpeta8Component } from './carpeta8/carpeta8.component';
import { Carpeta9Component } from './carpeta9/carpeta9.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdministradorGuard } from "./guard/administrador.guard";
import { EditorGuard } from "./guard/editor.guard";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'carpeta1',
    component: Carpeta1Component,
    canActivate: [AdministradorGuard]
  },
  {
    path: 'carpeta2',
    component: Carpeta2Component,
    canActivate: [AdministradorGuard]
  },
  {
    path: 'carpeta3',
    component: Carpeta3Component,
    canActivate: [EditorGuard]
  },
  {
    path: 'carpeta4',
    component: Carpeta4Component,
    canActivate: [EditorGuard]
  },
  {
    path: 'carpeta5',
    component: Carpeta5Component,
    canActivate: [AdministradorGuard]
  },
  {
    path: 'carpeta6',
    component: Carpeta6Component,
    canActivate: [AdministradorGuard]
  },
  {
    path: 'carpeta7',
    component: Carpeta7Component,
    canActivate: [AdministradorGuard]
  },
  {
    path: 'carpeta8',
    component: Carpeta8Component,
    canActivate: [AdministradorGuard]
  },
  {
    path: 'carpeta9',
    component: Carpeta9Component,
    canActivate: [AdministradorGuard]
  },
  {
    path: '**',
    component: NotFoundComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
