import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LogInService } from 'src/app/service/login-service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  loginView:any={};

  constructor(public router : Router,private loginService:LogInService) { }

  ngOnInit(): void {
  }

 

  submitLoginForm(loginForm: NgForm) {
    console.log('Your form data : ', loginForm.value);
    
    this.loginService.saveLogin(loginForm.value).subscribe(response => {
      console.log(response.status);
      if (response.status == true) {
        this.router.navigateByUrl('/home');
        alert("login successfully!")
      }
      else{
        this.router.navigateByUrl('')
        alert("email and password mismatch")
      }
      console.log(response)
    })
  }

}
