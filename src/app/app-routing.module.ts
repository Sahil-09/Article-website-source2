import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { AuthComponent } from "./auth/auth.component";
import{DashboardComponent} from "./manage-post/dashboard/dashboard.component";
import {authguard} from "./authguard.service";
import{ManagePostComponent} from "./manage-post/manage-post.component"

const root:Routes=[
    {path:"",loadChildren:()=>import('./home/home.module').then(m=>m.HomeModule)},
    {path:'explore',loadChildren:()=>import('./explore/explore.module').then(m=>m.ExploreModule)},
    {path:'Dash',canActivate:[authguard],children:
    [
        {path:'',component:DashboardComponent},
        {path:':title/:desc/:image/:id',component:DashboardComponent}
    ]},
    {path:'Manage',component:ManagePostComponent,canActivate:[authguard]},
    {path:'about',component:AboutComponent},
    {path:'Auth',component:AuthComponent},
]

@NgModule({
    imports:[RouterModule.forRoot(root)],
    exports:[RouterModule]
})

export class AppRoutingModule{}