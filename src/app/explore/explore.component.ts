import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../manage-post/dashboard/post.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})

export class ExploreComponent implements OnInit {
  loadin=true
  constructor(private postser:PostService,private router:Router) { }
  articles=null
  ngOnInit() {
    this.postser.getposts().subscribe(data=>{
      this.loadin=false
      if(this.postser.articles.length>0){
        this.articles=this.postser.articles.reverse()
      }
    }) 
  }

  getpost(i){
    this.router.navigate(['explore/article',i])
  }

}
