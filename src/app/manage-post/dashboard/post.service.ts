import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { tap } from "rxjs/operators";

@Injectable({
    providedIn:'root'
})

// http://articlewebsite.herokuapp.com/ http://localhost:3000/

export class PostService{
    articles
    constructor(private http:HttpClient,private router:Router){}

    createpost(data){
        return this.http.post('http://articlewebsite.herokuapp.com/api/article/create',data)
    }

    updatepost(data,id){
        this.http.patch("http://articlewebsite.herokuapp.com/api/article/update/"+id,data).subscribe((data)=>{
            this.router.navigate(["/explore/page"])
        })
    }

    getposts(){
        return this.http.get("http://articlewebsite.herokuapp.com/api/article/get").pipe(tap(data=>{
            this.articles=data;
        }))
    }


    getpost(i){
        return this.http.get("http://articlewebsite.herokuapp.com/api/article/get/"+i)
    }

    getmanagepost(){
        return this.http.get("http://articlewebsite.herokuapp.com/api/article/manage")
    }

    deletepost(id){
        return this.http.delete("http://articlewebsite.herokuapp.com/api/article/delete/"+id)
    }
}