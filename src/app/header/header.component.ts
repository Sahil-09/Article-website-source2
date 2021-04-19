import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private Authser:AuthService){}

  toggle=true
  islogin=false;
  menu=false;
  hide=true;
  Username;
  ngOnInit() {
    this.Authser.token.subscribe(data=>{
      if(data){
       return this.islogin=true;
      }
      return this.islogin=false;
    })

    this.Authser.name.subscribe(data=>{
      if(data){
        this.Username=data.split(' ')[0]
      }
      
    })
  }


  harmburger(){
    this.toggle=!this.toggle
  }

  showmenu(){
    this.menu=!this.menu;
  }
  backdrop(){
    this.menu=false
  }

  logout(){
    this.showmenu()
    this.Authser.Logout()
    this.showmenu()
    this.Username=null
    this.islogin=false;
  }

  close(){
    this.toggle=true
  }

}
