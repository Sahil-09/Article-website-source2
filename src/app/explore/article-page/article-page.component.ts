import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/manage-post/dashboard/post.service'

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.css']
})
export class ArticlePageComponent implements OnInit {
  Article=[]
  constructor(private route:ActivatedRoute,private postser:PostService) { }

  ngOnInit() {
    const id=this.route.snapshot.params['id']
    this.postser.getpost(id).subscribe(data=>{
      this.Article.push(data)
    })
  }

}
