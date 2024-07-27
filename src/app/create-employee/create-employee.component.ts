import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppConstants } from '../app-constants';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  constructor(private employeeService : EmployeeService
    , private router : Router) { }

  employee : Employee = new Employee();
  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.employee);
    this.addEmployee(this.employee)
  }

  addEmployee(employee : Employee){
    this.employeeService.addEmployee(employee).subscribe(data =>{
      console.log(`${employee} is added `)
      this.router.navigate([AppConstants.GET_EMPLOYEES_PATH])
    }, error => {
      console.log(employee);
    }); 
    
  }
}
