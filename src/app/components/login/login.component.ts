import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: false,

  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  type:string="password";
  isText:boolean=false;
  eyeIcon:string="fa-eye-slash";


  constructor(){}
  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon="fa-eye":this.eyeIcon="fa-eye-slash";
    this.isText ? this.type="text" :this.type="password"



  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }



}
