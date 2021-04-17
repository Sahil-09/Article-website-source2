import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { PostService } from 'src/app/dashboard/post.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  constructor(private postser:PostService,private router:Router) { }
  
  disable=false
  
  @Output() imgval= new EventEmitter()

  imagepath
//   'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80',
//   'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
// 'https://images.unsplash.com/photo-1593642532009-6ba71e22f468?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
  
  
  imageval
  title
  desc
  count=0
  artid
  loadin=true
  // temp=this.imagepath.length;
  
  timer
  
  lefdisable=true;
  
  
  ngOnInit(){

    this.postser.getposts().subscribe(data=>{
      
      this.imagepath=this.postser.articles.reverse()
      console.log(this.imagepath)
      this.imageval=this.imagepath[0].image
      this.title=this.imagepath[0].title
      this.desc=this.imagepath[0].desc
      this.artid=this.imagepath[0]._id
      this.loadin=false;
      console.log(this.imageval)
      this.imgval.emit(this.imageval)
    })
    
  }

  next(){
    if(this.timer){
      console.log("trying to clear")
      clearInterval(this.timer)
      this.timer=null
    }
    if(this.count>=0){
      this.lefdisable=false;
    }
    this.count+=1
    if(this.count<((this.imagepath.length/2)+1) && this.count>0){
      this.imageval=this.imagepath[this.count].image
      this.title=this.imagepath[this.count].title
      this.desc=this.imagepath[this.count].desc
      this.artid=this.imagepath[this.count]._id
      this.imgval.emit(this.imageval)
    }
    if((this.count+1)>=((this.imagepath.length/2)+1)){
      this.disable=true;
    } 
    console.log(this.count)
  }

  prev(){
    this.count-=1
    if(this.count<=0){
      this.lefdisable=true;
    } 
    if(this.count<=((this.imagepath.length/2)+1) && this.count>=0){
      this.imageval=this.imagepath[this.count].image
      this.title=this.imagepath[this.count].title
      this.desc=this.imagepath[this.count].desc
      this.artid=this.imagepath[this.count]._id
      this.imgval.emit(this.imageval)
    }
    if(this.disable){
      this.disable=false;
    }
    console.log(this.count)
  }
  Article(){
    this.router.navigate(['/article',this.artid])
  }
}
