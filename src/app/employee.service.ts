import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConstants } from './app-constants';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl: string = "http://localhost:8080/employeeManagement";
  constructor(private httpCLient: HttpClient) { }
  private employeesPath = AppConstants.GET_EMPLOYEES_PATH;

  getEmployeesList() : Observable<Employee[]>{
    //return this.httpCLient.get<Employee[]>(this.baseUrl);
    
    return this.httpCLient.get<Employee[]>(`${this.baseUrl}${this.employeesPath}`);
  }

  addEmployee(employee: Employee) : Observable<any>{
      return this.httpCLient.post(`${this.baseUrl}${this.employeesPath}`, employee);
  }

  getEmployeeById(id: number) : Observable<Employee>{
    return this.httpCLient.get<Employee>(`${this.baseUrl}${this.employeesPath}/${id}`);
  }

  updateEmployee(employee : Employee) : Observable<Object>{
    return this.httpCLient.put(`${this.baseUrl}${this.employeesPath}`, employee);
  }

  deleteEmployee(id?: number) : Observable<Object>{
    return this.httpCLient.delete(`${this.baseUrl}${this.employeesPath}/${id}`);
  }
}
