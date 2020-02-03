import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpserviceService } from "../service/httpservice.service";
import {Observable} from 'rxjs';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employeeLists : any;
  constructor(private httpservice : HttpserviceService, private route : Router) { }

  ngOnInit() {
    this.getEmployeeList();
  }

  getEmployeeList() {
    this.httpservice.getMethod('employees').subscribe((results) => {
      console.log(results);
      this.employeeLists = results['data'];
    });
  }

  selectEmployee(id : number){
   // this.route.navigate(['/employee-detail'], { queryParams: { id: id } });
   this.route.navigate(['/employee-detail/'+id]);
  }

}
