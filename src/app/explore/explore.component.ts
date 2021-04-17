import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { PostService } from '../dashboard/post.service';

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
      console.log(this.articles)
    }) 
  }

  getpost(i){
    this.router.navigate(['/article',i])
  }

}
