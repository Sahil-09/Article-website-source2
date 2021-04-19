import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ArticlePageComponent } from "./article-page/article-page.component";
import { ExploreComponent } from "./explore.component";
console.warn("explore module")
@NgModule({
    declarations:[
        ExploreComponent,
        ArticlePageComponent],
    imports:[CommonModule]
})

export class ExploreModule{}