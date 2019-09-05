import { Component, OnInit } from "@angular/core";
import { PageRoute, RouterExtensions } from "nativescript-angular/router";
import { take } from "rxjs/operators";

import { ChallengeService } from "../challenge.service";

@Component({
  moduleId: module.id,
  selector: "ns-challenge-edit",
  templateUrl: "./challenge-edit.component.html"
})
export class ChallengeEditComponent implements OnInit {
  isCreating = true;
  title = "";
  description = "";

  constructor(
    private pageRoute: PageRoute,
    private router: RouterExtensions,
    private challengeService: ChallengeService
  ) {}

  ngOnInit(): void {
    this.pageRoute.activatedRoute.subscribe(activatedRoute => {
      activatedRoute.paramMap.subscribe(paramMap => {
        if (!paramMap.has("mode")) {
          this.isCreating = true;
        } else {
          this.isCreating = paramMap.get("mode") !== "edit";
        }

        if (!this.isCreating) {
          this.challengeService.currentChallenge
            .pipe(take(1))
            .subscribe(challenge => {
              this.title = challenge.title;
              this.description = challenge.description;
            });
        }
      });
    });
  }

  onSubmit(title: string, description: string) {
    if (this.isCreating) {
      this.challengeService
        .createNewChallenge(title, description)
        .subscribe(res => {
          this.router.backToPreviousPage();
        });
    } else {
      this.challengeService
        .updateChallenge(title, description)
        .subscribe(res => {
          this.router.backToPreviousPage();
        });
    }
  }
}
