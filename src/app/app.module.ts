import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ClickOutsideModule} from 'ng-click-outside'
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './home/hero/hero.component';
import { FeedComponent } from './home/feed/feed.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ExploreComponent } from './explore/explore.component';
import { AuthComponent } from './auth/auth.component';
import{ AppRoutingModule } from './app-routing.module';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';
import{HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { FooterComponent } from './footer/footer.component';
import{AuthInterceptor} from './auth-interceptor.service';
import { ArticlePageComponent } from './article-page/article-page.component';
import { ManagePostComponent } from './manage-post/manage-post.component';
import {LoadingComponent} from "./Loading/loading.component";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    FeedComponent,
    DashboardComponent,
    ContactComponent,
    AboutComponent,
    HomeComponent,
    ExploreComponent,
    AuthComponent,
    FooterComponent,
    ArticlePageComponent,
    ManagePostComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ClickOutsideModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
