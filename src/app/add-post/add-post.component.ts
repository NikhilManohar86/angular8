import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpserviceService } from '../service/httpservice.service';

import {  Router } from '@angular/router';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  postForm;
  postData;
  constructor(private route: Router, private httpService: HttpserviceService) { }

  ngOnInit() {
    this.postForm = new FormGroup({
      title : new FormControl(''),
      body : new FormControl(''),
      // id: 1,
      // userId: 1 
    });
  }
  onSubmit(){
    let objPostData = {
      title : this.postForm.value.title,
      body : this.postForm.value.body,
      userId: 1
    }
    this.httpService.postMethod("posts", objPostData).subscribe((res)=>{
      this.postData = res; 
      console.log(res);
      alert("Successfully submit");
      this.route.navigate(['/employee-list']);
    });

  }

}
