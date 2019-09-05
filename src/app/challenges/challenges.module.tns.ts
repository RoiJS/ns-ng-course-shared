import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { ChallengeTabsComponent } from "./challenge-tabs/challenge-tabs.component";
import { CurrentChallengeComponent } from "./current-challenge/current-challenge.component";
import { TodayComponent } from "./today/today.component";
import { SharedModule } from "../shared/shared.module";
import { ChallengesRoutingModule } from "./challenges-routing.module";
import { ChallengeActionsModule } from "./challenge-actions/challenge-actions.module";

@NgModule({
    declarations: [
        ChallengeTabsComponent,
        CurrentChallengeComponent,
        TodayComponent
    ],
    imports: [
        NativeScriptCommonModule,
        ChallengeActionsModule,
        ChallengesRoutingModule,
        SharedModule
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class ChallengesModule {}
