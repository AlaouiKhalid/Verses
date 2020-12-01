import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { SouarComponent } from "./souar/souar.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/souar",
    pathMatch: "full",
  },
  {
    path: "home",
    component: AppComponent,
  },
  {
    path: "souar",
    component: SouarComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
