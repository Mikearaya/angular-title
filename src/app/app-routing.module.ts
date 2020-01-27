import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PageOneComponent } from "./page-one/page-one.component";
import { PageTwoComponent } from "./page-two/page-two.component";
import { PageThreeComponent } from "./page-three/page-three.component";

const routes: Routes = [
  {
    path: "one",
    component: PageOneComponent,
    data: { title: "Page one title" }
  },
  {
    path: "two",
    component: PageTwoComponent,
    data: { title: "Page two title" }
  },
  {
    path: "three",
    component: PageThreeComponent,
    data: { title: "Page three title" }
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
