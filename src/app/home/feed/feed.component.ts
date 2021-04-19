import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from 'src/app/manage-post/dashboard/post.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
loadin=true
  article=[]
  constructor(private postser:PostService,private router:Router) { }
  ngOnInit(){

    this.postser.getposts().subscribe(data=>{
      this.article=this.postser.articles.reverse().slice(0,3)
      this.loadin=false
    })
  }

  Article(id){
    this.router.navigate(['/article',id])
  }

}
