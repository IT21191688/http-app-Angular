import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllComponent } from './Components/all/all.component';
import { NewComponent } from './Components/new/new.component';
import { DeleteComponent } from './Components/delete/delete.component';
import { FindComponent } from './Components/find/find.component';
import { UpdateComponent } from './Components/update/update.component';

const routes: Routes = [
  {path:'', redirectTo:'/all', pathMatch:'full'},
  {path:'all',component:AllComponent},
  {path:'find',component:FindComponent},
  {path:'new',component:NewComponent},
  {path:'update',component:UpdateComponent},
  {path:'delete',component:DeleteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
