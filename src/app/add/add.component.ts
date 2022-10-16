import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor() { }
  employeecode=""
  employee=""
  designation=""
  gender=""
  company_name=""
  salary=""
  address=""
  number=""
  email=""
  experiance=""
  blood=""
  dob=""

status:boolean=false
  readvalues=()=>{
    let data={

      "employeecode":this.employeecode,
      "employee":this.employee,
      "designation":this.designation,
      "gender":this.gender,
      "company_name":this.company_name,
      "salary":this.salary,
      "address":this.address,
      "number":this.number,
      "email":this.email,
      "experiance":this.experiance,
      "blood":this.blood,
      "dob":this.dob,
    }
    console.log(data)
    alert("Data Added")
    this.employeecode=""
  this.employee=""
  this.designation=""
  this.gender=""
  this.company_name=""
  this.salary=""
  this.address=""
  this.number=""
  this.email=""
  this.experiance=""
  this.blood=""
  this.dob=""
this.status=true

  
}

  ngOnInit(): void {
  }

}
