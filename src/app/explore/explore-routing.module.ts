import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ArticlePageComponent } from "./article-page/article-page.component";
import { ExploreComponent } from "./explore.component";

const exproute:Routes=[
    {path:'explore/page',component:ExploreComponent},
    {path:'explore/article/:id',component:ArticlePageComponent}
]

@NgModule({
    imports:[RouterModule.forChild(exproute)],
    exports:[RouterModule]
})


export class ExploretRoutingModule{}