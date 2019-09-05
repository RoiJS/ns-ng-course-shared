import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";

import { ChallengeService } from "../challenge.service";
import { Challenge } from "../challenge.model";
import { Day, DayStatus } from "../day.model";

@Component({
  selector: "ns-current-challenge",
  templateUrl: "./current-challenge.component.html",
  styleUrls: ["./_current-challenge.component.scss"]
})
export class CurrentChallengeComponent implements OnInit, OnDestroy {
  weekDays = ["S", "M", "T", "W", "T", "F", "S"];
  currentChallenge: Challenge;
  selectedDay: Day = null;

  private curChallengeSub: Subscription;
  private isLoading = false;

  constructor(private challengeService: ChallengeService) {}

  ngOnInit() {
    this.curChallengeSub = this.challengeService.currentChallenge.subscribe(
      challenge => {
        this.currentChallenge = challenge;
      }
    );

    this.isLoading = true;

    this.challengeService.fetchCurrentChallenge().subscribe(
      fetchChallenge => {
        this.isLoading = false;
      },
      err => {
        console.log(err);
        this.isLoading = false;
      }
    );
  }

  ngOnDestroy() {
    if (this.curChallengeSub) {
      this.curChallengeSub.unsubscribe();
    }
  }

  getRow(index: number, day: { dayInMonth: number; dayInWeek: number }) {
    const startRow = 2;
    const weekRow = Math.floor(index / 7);
    const firstWeekDayOfMonth = new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      1
    ).getDay();

    const irregularRow = day.dayInWeek < firstWeekDayOfMonth ? 1 : 0;

    return startRow + weekRow + irregularRow;
  }

  onChangeStatus(day: Day) {
    if (!day.isSettable) {
      return;
    }

    this.selectedDay = day;
  }

  onUpdateStatus(selectedAction: DayStatus) {
    if (selectedAction === DayStatus.Open) {
      this.selectedDay = null;
      return;
    }

    this.challengeService.updateDayStatus(
      this.selectedDay.dayInMonth,
      selectedAction
    );

    this.selectedDay = null;
  }
}
