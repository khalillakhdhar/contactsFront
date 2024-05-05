import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListContactsComponent } from './list-contacts/list-contacts.component';
import { ListEventComponent } from './list-event/list-event.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path: '', redirectTo: '/contacts', pathMatch: 'full'},
  {path:'contacts',component:ListContactsComponent},
  {path:'events',component:ListEventComponent},
  {path:'notfound',component:NotFoundComponent},
  {path:'**',redirectTo:'/notfound'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
