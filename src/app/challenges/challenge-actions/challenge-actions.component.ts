import {
    Component,
    OnInit,
    Output,
    EventEmitter,
    Input,
    OnChanges,
    SimpleChanges
} from "@angular/core";
import { DayStatus } from "../day.model";

@Component({
    selector: "ns-challenge-actions",
    templateUrl: "./challenge-actions.component.html",
    styleUrls: ["./challenge-actions.component.scss"]
})
export class ChallengeActionsComponent implements OnInit, OnChanges {
    @Output() actionSelect = new EventEmitter<DayStatus>();
    @Input() cancelText = "Cancel";
    @Input() chosen: "complete" | "fail" = null;
    @Input() startDone = false;

    action: "complete" | "fail" | "cancel" = null;
    done = false;

    constructor() {}

    ngOnInit() {}

    ngOnChanges(changes: SimpleChanges) {
        if (changes.chosen) {
            this.action = changes.chosen.currentValue;
            if (changes.chosen.currentValue === null) {
                this.done = false;
            }
        }
        if (changes.startDone) {
            if (changes.startDone.currentValue) {
                this.done = true;
            }
        }
    }

    onAction(action: "complete" | "fail" | "cancel") {
        let status = DayStatus.Open;

        if (action === "complete") {
            status = DayStatus.Completed;
        } else if (action === "fail") {
            status = DayStatus.Failed;
        }

        this.action = action === "cancel" ? "cancel" : action;
        this.done = action !== "cancel";

        this.actionSelect.emit(status);
    }
}
