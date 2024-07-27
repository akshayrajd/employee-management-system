import { Component } from '@angular/core';
import { AppConstants } from './app-constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Employee Management System';

  employeesPath = AppConstants.GET_EMPLOYEES_PATH;
  addEmployeesPath = AppConstants.ADD_EMPLOYEES_PATH;
}
