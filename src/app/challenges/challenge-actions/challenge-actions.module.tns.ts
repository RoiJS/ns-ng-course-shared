import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { ChallengeActionsComponent } from "./challenge-actions.component";

@NgModule({
    imports: [NativeScriptCommonModule],
    declarations: [ChallengeActionsComponent],
    exports: [ChallengeActionsComponent],
    schemas: [NO_ERRORS_SCHEMA]
})
export class ChallengeActionsModule {}
