import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';
import{HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { HomeModule } from './home/home.module';
import { ExploretRoutingModule } from './explore/explore-routing.module';
import{ AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './manage-post/dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { FooterComponent } from './footer/footer.component';
import{AuthInterceptor} from './auth-interceptor.service';
import { ManagePostComponent } from './manage-post/manage-post.component';
import {LoadingComponent} from "./Loading/loading.component";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    AuthComponent,
    AboutComponent,
    FooterComponent,
    ManagePostComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HomeModule,
    ExploretRoutingModule,
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
