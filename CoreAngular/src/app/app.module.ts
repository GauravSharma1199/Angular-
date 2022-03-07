import {NgModule} from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppCompo } from "./app.component";
import { CardComponent } from "./card.component";

@NgModule({
    imports : [BrowserModule],
    declarations : [AppCompo, CardComponent],
    bootstrap : [AppCompo]
})
export class AppModule{}