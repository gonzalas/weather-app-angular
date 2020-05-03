import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { SearchComponent } from "./components/search/search.component";

const routes: Routes = [
  { path: "search", component: SearchComponent },
  { path: "", redirectTo: "/search", pathMatch: "full" },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
