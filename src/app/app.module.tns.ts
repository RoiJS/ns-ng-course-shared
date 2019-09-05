import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular/side-drawer-directives";

import { AppComponent } from "@src/app/app.component";
import { DayModalComponent } from "./challenges/day-modal/day-modal.component";
import { AuthGuard } from "./auth/auth.guard";

import { AppRoutingModule } from "@src/app/app-routing.module";
import { ChallengeActionsModule } from "./challenges/challenge-actions/challenge-actions.module";

@NgModule({
  declarations: [AppComponent, DayModalComponent],
  imports: [
    NativeScriptModule,
    NativeScriptHttpClientModule,
    NativeScriptUISideDrawerModule,
    AppRoutingModule,
    ChallengeActionsModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
  entryComponents: [DayModalComponent]
})
export class AppModule {}
