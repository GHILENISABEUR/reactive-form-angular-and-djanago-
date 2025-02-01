import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  standalone: false,

  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {
  type:string="passowrd";
  isText:boolean=false;
  eyeIcon:string="fa-eye-slash";
  constructor(){
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon="fa-eye":this.eyeIcon="fa-eye-slash";
    this.isText ?this.type="text" : this.type="password";

  }

}
