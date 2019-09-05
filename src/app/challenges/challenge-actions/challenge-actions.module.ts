import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ChallengeActionsComponent } from "./challenge-actions.component";

@NgModule({
    imports: [CommonModule],
    declarations: [ChallengeActionsComponent],
    exports: [ChallengeActionsComponent]
})
export class ChallengeActionsModule {}
