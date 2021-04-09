import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Blog-Website';
  constructor(private authser:AuthService){}
  ngOnInit(){

    const token=JSON.parse(localStorage.getItem("User"));
    if(token){
      this.authser.AutoLogin(token)
    }
    
  }
}
