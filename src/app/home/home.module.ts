import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FeedComponent } from "./feed/feed.component";
import { HeroComponent } from "./hero/hero.component";
import { HomeComponent } from "./home.component";

@NgModule({
    declarations:[
        HeroComponent,
        FeedComponent,
        HomeComponent
    ],
    exports:[
        RouterModule
    ],
    imports:[CommonModule,
        HttpClientModule,
    RouterModule.forChild([{path:'',component:HomeComponent}])]
})

export class HomeModule{}