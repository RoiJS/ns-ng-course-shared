import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { SharedModule } from "../../shared/shared.module";
import { ChallengeEditComponent } from "./challenge-edit.component";

@NgModule({
  declarations: [ChallengeEditComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: "",
        component: ChallengeEditComponent
      }
    ]),
    SharedModule
  ]
})
export class ChallengeEditModule {}
