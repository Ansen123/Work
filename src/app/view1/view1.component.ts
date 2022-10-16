import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.css']
})
export class View1Component implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchData()
   }
   status:boolean=false
   fetchData=()=>{
    this.myapi.viewCourse().subscribe(
      (data)=>{
        this.courseData=data
        this.status=true
      }
    )
   }
courseData:any = []

  ngOnInit(): void {
  }

}
