import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PostService } from 'src/app/manage-post/dashboard/post.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit{

  constructor(private postser:PostService,private router:Router) { }
  
  disable=false
  
  @Output() imgval= new EventEmitter()

  imagepath
  
  datasub:Subscription
  
  imageval
  title
  desc
  count=0
  artid
  loadin=true

  
  timer
  
  lefdisable=true;
  
  
  ngOnInit(){

   this.postser.getposts().subscribe(data=>{
      
      this.imagepath=this.postser.articles.reverse()
      this.imageval=this.imagepath[0].image
      this.title=this.imagepath[0].title
      this.desc=this.imagepath[0].desc
      this.artid=this.imagepath[0]._id
      this.loadin=false;
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
    this.router.navigate(['/explore/article',this.artid])
  }

}
