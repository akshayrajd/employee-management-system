import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppConstants } from '../app-constants';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employeeList? : Employee[];
  constructor(private employeeService: EmployeeService, 
    private router : Router) { }

  ngOnInit(): void {
    this.getEmployees()
  }

  private getEmployees(){
    console.log('call')
    this.employeeService.getEmployeesList().subscribe(data =>{
      console.log(data)
      this.employeeList = data;
    });
  }

  updateEmployee(id?: number){
    this.router.navigate([AppConstants.UPDATE_EMPLOYEES_PATH, id]);
  }
  
  deleteEmployee(id?: number){
    //console.log(id)
    this.employeeService.deleteEmployee(id).subscribe(data1 =>{
      //this.getEmployees();   
    });
    
  }

}
