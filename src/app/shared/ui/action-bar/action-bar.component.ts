import { Component, OnInit, Input } from "@angular/core";

import { UIService } from "../../ui.service";
import { AuthService } from "@src/app/auth/auth.service";

declare var android: any;

@Component({
  selector: "ns-action-bar",
  templateUrl: "./action-bar.component.html",
  styleUrls: ["./action-bar.component.scss"]
})
export class ActionBarComponent implements OnInit {
  @Input() title = "";
  @Input() hasChallenge = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  onLogout() {
    this.authService.logout();
  }
}
