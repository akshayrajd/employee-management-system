import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppConstants } from './app-constants';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

const routes: Routes = [
  {path : "", redirectTo : "employees", pathMatch  :'full'},
  {path : "employees", component: EmployeeListComponent},
  {path: "add-employee", component: CreateEmployeeComponent},
  { path:  AppConstants.UPDATE_EMPLOYEES_PATH+'/:id', component: UpdateEmployeeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
