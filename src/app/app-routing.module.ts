import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from "./employee-list/employee-list.component";
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { AddPostComponent } from './add-post/add-post.component';

const routes: Routes = [
  {path : "", component : EmployeeListComponent },
  {path : "employee-list", component : EmployeeListComponent },
  {path : "employee-detail/:id", component : EmployeeDetailComponent },
  {path : 'add-post', component : AddPostComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
