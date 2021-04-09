import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { PostService } from './post.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  imageval
  name
  editmode=false;
  editid=''
  constructor(private Authser:AuthService,private postser:PostService,private route:ActivatedRoute) { }
  ArticleForm:FormGroup
  ngOnInit() {

    this.ArticleForm=new FormGroup({
      title:new FormControl(null),
      image:new FormControl(null),
      desc:new FormControl(null)
    })

    let edittitle=this.route.snapshot.params['title']
    let editdesc=this.route.snapshot.params['desc']
    let editimage=this.route.snapshot.params['image']
    let id=this.route.snapshot.params['id']
    if(edittitle){
      this.editmode=true
      this.ArticleForm.patchValue({
        title:edittitle,
        desc:editdesc,
        image:editimage
      })
      this.editid=id
      this.imageval=editimage
      console.log(editimage)
    }
    
  }
  
  filepick(event){
    const file=event.target.files[0]
    this.ArticleForm.patchValue({image:file})
    const reader= new FileReader()
    reader.onload=()=>{
      this.imageval= reader.result
    }
    reader.readAsDataURL(file)
  }

  onSubmit(form){
    this.Authser.name.subscribe(data=>{
      this.name=data
    })
    let data= new FormData
      data.append("title",form.value.title)
      data.append("name",this.name)
      data.append("desc",form.value.desc)
      data.append("image",form.value.image)
      data.append("time",new Date().toLocaleString())
    
    if(!this.editmode){
      this.postser.createpost(data)
    }else{
      this.postser.updatepost(data,this.editid)
    }
    
  }

  reset(){
    this.imageval=''
    this.ArticleForm.reset()
  }

}
