import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AuthComponent } from "./auth.component";

@NgModule({
    declarations:[AuthComponent],
    imports:[HttpClientModule]
})
export class AuthModule{}