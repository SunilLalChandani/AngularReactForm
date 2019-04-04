import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  employeeForm: FormGroup;
  names:string;
  phone:Number;   
  constructor(private _fb: FormBuilder) {
    this.employeeForm = new FormGroup({
   names:new FormControl('',Validators.required),
      
      phone:new FormControl('',Validators.required)
    })
   }

  ngOnInit() {
  }
save(){
  if(!this.employeeForm.valid)
  {
    alert("Enter field");
  }
  else{
    alert("done");
    
  }
}
}
