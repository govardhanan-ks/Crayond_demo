import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import  { RegComponent }  from './reg/reg.component'
import { TestComponent } from './test/test.component'
import { ListUserComponent } from './list-user/list-user.component'
import { CreateUserComponent } from './create-user/create-user.component'
//import { from } from 'rxjs';
const routes: Routes = [
  //{ path: 'reg', component: RegComponent },
  { path: 'test', component: TestComponent},
  { path: 'ListUser',component: ListUserComponent}, 
  { path: 'CreateUser',component: CreateUserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


