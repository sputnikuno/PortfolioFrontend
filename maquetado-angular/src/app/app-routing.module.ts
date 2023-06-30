import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { NewExperienciaComponent } from './componentes/experiencias/new-experiencia.component';
import { EditExperiencaComponent } from './componentes/experiencias/edit-experienca/edit-experienca.component';
import { AcercadeComponent } from './componentes/acercade/acercade.component';
import { EditAcercaDeComponent } from './componentes/acercade/edit-acerca-de.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'nuevaexp', component: NewExperienciaComponent },
  { path: 'editexp/:id', component: EditExperiencaComponent },
  { path: 'editAcercaDe/:id', component: EditAcercaDeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
