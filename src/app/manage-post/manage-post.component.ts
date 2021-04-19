import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, retry } from 'rxjs/operators';
import { PostService } from './dashboard/post.service';

@Component({
  selector: 'app-manage-post',
  templateUrl: './manage-post.component.html',
  styleUrls: ['./manage-post.component.css']
})
export class ManagePostComponent implements OnInit {

  constructor(private postser:PostService,private router:Router) { }
  articles=[]
  loadin=true
  ngOnInit(){
    this.postser.getmanagepost().pipe(map(res=>{
      const array=[];
      for(const key in res){
        array.push(res[key])
      }
      return array
    })).subscribe(data=>{
      this.loadin=false
      this.articles=data.reverse()
    })
  }

  delete(id,i){
    this.postser.deletepost(id).subscribe((data)=>{
      this.articles.splice(i,1)
    })
  }

  edit(title,desc,image,id){
    this.router.navigate(["/Dash",title,desc,image,id])
  }

}
