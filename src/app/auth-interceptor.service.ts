import { HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { AuthService } from "./auth/auth.service";
import { exhaustMap, take } from "rxjs/operators";
import { Injectable } from "@angular/core";


@Injectable({
    providedIn:"root"
})

export class AuthInterceptor implements HttpInterceptor{

    constructor(private Authser:AuthService){}
    
    intercept(req:HttpRequest<any>,next:HttpHandler){
        let token
       
            this.Authser.token.subscribe(tok=>{
                token=tok;
            })
            console.log(token)
                if(token){
                    const modreq=req.clone({
                        headers:new HttpHeaders().set('auth',token)
                    })
                    return next.handle(modreq)
                    console.log(modreq)
                }
                 return next.handle(req)  
            }
        }
        

