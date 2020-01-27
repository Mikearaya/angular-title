import { Component, OnInit } from "@angular/core";
import { NavigationEnd, Router, ActivatedRoute } from "@angular/router";
import { filter } from "rxjs/operators";
@Component({
  selector: "app-angular-title",
  templateUrl: "./angular-title.component.html",
  styleUrls: ["./angular-title.component.css"]
})
export class AngularTitleComponent implements OnInit {
  title = "";
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(event => {
        let currentRoute = this.activatedRoute.root;
        do {
          const childrenRoutes = currentRoute.children;
          currentRoute = null;
          childrenRoutes.forEach(route => {
            if (route.outlet === "primary") {
              this.title = route.snapshot.data.title;
              currentRoute = route;
            }
          });
        } while (currentRoute);
      });
  }
}
