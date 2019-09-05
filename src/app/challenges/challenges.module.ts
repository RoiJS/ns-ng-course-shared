import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ChallengesRoutingModule } from "./challenges-routing.module";
import { ChallengeActionsModule } from "./challenge-actions/challenge-actions.module";

import { CurrentChallengeComponent } from "./current-challenge/current-challenge.component";
import { DayModalComponent } from "./day-modal/day-modal.component";
import { TodayComponent } from "./today/today.component";
import { SharedModule } from "../shared/shared.module";
import { BackdropComponent } from "./day-modal/backdrop.component";

@NgModule({
  declarations: [
    CurrentChallengeComponent,
    TodayComponent,
    DayModalComponent,
    BackdropComponent
  ],
  imports: [
    CommonModule,
    ChallengeActionsModule,
    ChallengesRoutingModule,
    SharedModule
  ]
})
export class ChallengesModule {}
