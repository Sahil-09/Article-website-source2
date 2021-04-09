import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import{ExploreComponent} from "./explore/explore.component"
import { AboutComponent } from "./about/about.component";
import { AuthComponent } from "./auth/auth.component";
import{DashboardComponent} from "./dashboard/dashboard.component";
import{ArticlePageComponent} from './article-page/article-page.component'
import {authguard} from "./authguard.service";
import{ManagePostComponent} from "./manage-post/manage-post.component"

const root:Routes=[
    {path:'',component:HomeComponent},
    {path:'explore',component:ExploreComponent},
    {path:'Dash',component:DashboardComponent,canActivate:[authguard]},
    {path:'Dash/:title/:desc/:image/:id',component:DashboardComponent,canActivate:[authguard]},
    {path:'Manage',component:ManagePostComponent,canActivate:[authguard]},
    {path:'about',component:AboutComponent},
    {path:'article/:id',component:ArticlePageComponent},
    {path:'Auth',component:AuthComponent},
]

@NgModule({
    imports:[RouterModule.forRoot(root)],
    exports:[RouterModule]
})

export class AppRoutingModule{

}