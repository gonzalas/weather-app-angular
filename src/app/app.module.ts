import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { SearchComponent } from "./components/search/search.component";
import { ResultComponent } from "./components/result/result.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { WindPipe } from "./pipes/wind.pipe";
import { RainPipe } from "./pipes/rain.pipe";
import { MapComponent } from './components/map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ResultComponent,
    HeaderComponent,
    FooterComponent,
    WindPipe,
    RainPipe,
    MapComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
