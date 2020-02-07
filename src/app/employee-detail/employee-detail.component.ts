import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute} from '@angular/router';
import { HttpserviceService } from '../service/httpservice.service'

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  empID;
  empDetail;
  isEdit : boolean ;
  constructor(private route: ActivatedRoute, private httpService : HttpserviceService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.empID = params.get('id');
      this.httpService.getMethod("posts/"+this.empID).subscribe((res)=>{
        this.empDetail = res;
        this.isEdit=false;
        console.log(res);
      });
    })
  }

  editMode(){
    this.isEdit = true;
  }

  onUpdate(){
    this.httpService.putMethod("posts/"+this.empID, this.empDetail).subscribe((res)=>{
      console.log(res);
      alert("Successfully update");
      this.isEdit = false;
    });
  }

}
