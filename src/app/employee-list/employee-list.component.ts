import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from "../service/httpservice.service";
import {Observable} from 'rxjs';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employeeLists : any;
  constructor(private httpservice : HttpserviceService) { }

  ngOnInit() {
    this.getEmployeeList();
  }

  getEmployeeList() {
    this.httpservice.getMethod('employees').subscribe((results) => {
      console.log(results);
      this.employeeLists = results['data'];
    });
  }

}
