import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { ActivatedRoute } from "@angular/router";
import { Page } from "tns-core-modules/ui/page/page";
import { ChallengeService } from "../challenge.service";

@Component({
    selector: "ns-challenge-tabs",
    templateUrl: "./challenge-tabs.component.html",
    styleUrls: [
        "./_challenge-tabs.component.common.scss",
        "./challenge-tabs.component.scss"
    ]
})
export class ChallengeTabsComponent implements OnInit {
    isLoading = false;

    constructor(
        private page: Page,
        private router: RouterExtensions,
        private active: ActivatedRoute,
        private challengeService: ChallengeService
    ) {}

    ngOnInit() {
        this.isLoading = true;
        this.challengeService.fetchCurrentChallenge().subscribe(
            fetchChallenge => {
                this.isLoading = false;
                this.loadTabRoutes();
            },
            err => {
                console.log(err);
                this.isLoading = false;
                this.loadTabRoutes();
            }
        );

        this.page.actionBarHidden = true;
    }

    loadTabRoutes() {
        setTimeout(() => {
            this.router.navigate(
                [
                    {
                        outlets: {
                            currentChallenge: ["current-challenge"],
                            today: ["today"]
                        }
                    }
                ],
                { relativeTo: this.active }
            );
        }, 10);
    }
}
