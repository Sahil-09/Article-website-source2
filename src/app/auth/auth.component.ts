import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { User } from './user.model';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  Loginswitch=true
  constructor(private router:Router,private Authser:AuthService) { }

  ngOnInit(): void {
  }

  Login(form){
    const data:User={
      name:form.value.name,
      email:form.value.email,
      gender:form.value.Gender,
      password:form.value.password
    }
    this.Authser.Login(data)
  }

  LoginSwitch(){
    this.Loginswitch=true
  }

  Signup(form){
    const data:User={
      name:form.value.name,
      email:form.value.email,
      gender:form.value.Gender,
      password:form.value.password
    }
    this.Authser.Signup(data)
  }

  signupswitch(){
    this.Loginswitch=false;
  }
}
