import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { RepoComponent } from './components/repo/repo.component';

const routes: Routes = [
  {path:'',component:UserComponent},
  {path:'user',component:UserComponent},
  {path:'repos/:id',component:RepoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
