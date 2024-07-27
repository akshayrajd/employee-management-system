import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppConstants } from '../app-constants';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  id: number = 0;
  employee : Employee = new Employee();
  constructor(private employeeService : EmployeeService, private route : ActivatedRoute, 
    private router : Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
    }, error => console.error(error));
  }

  onSubmit(){
    this.employeeService.updateEmployee(this.employee).subscribe(data => {
      this.router.navigate([AppConstants.GET_EMPLOYEES_PATH])
    });
  }

}
