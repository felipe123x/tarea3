import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import{HomeComponent} from './home/home.component';
import { ContenidoNoticiaComponent } from './contenido-noticia/contenido-noticia.component'; 


const routes: Routes = [
  {path:"", component: HomeComponent}, 
  {path:"form", component:FormComponent},
  {path:"contenido/:id", component:ContenidoNoticiaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
