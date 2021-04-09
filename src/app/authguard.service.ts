import { Injectable } from "@angular/core";
import { ActivatedRoute, CanActivate, Router } from "@angular/router";
import { AuthService } from "./auth/auth.service";

@Injectable({
    providedIn:"root"
})

export class authguard implements CanActivate{
    
    constructor(private authser:AuthService,private router:Router){}
    
    canActivate(){
        return this.authser.isauthenticate().then((res:boolean)=>{
            if(res){
                return true;
            }
            else{
                this.router.navigate(["/Auth"])
            }
        })
    }
}