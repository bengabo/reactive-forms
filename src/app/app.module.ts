import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { registerLocaleData } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatFormFieldModule, MatSelectModule, MatOptionModule} from '@angular/material';

import { AppComponent } from "./app.component";
import { EditableComponent } from "./editable/editable.component";
import { ViewModeDirective } from "./editable/view-mode.directive";
import { EditModeDirective } from "./editable/edit-mode.directive";
import { CheckboxComponent } from "./checkbox/checkbox.component";
import { EditInPlaceComponent } from "./edit-in-place/edit-in-place.component";
import { FocusableDirective } from "./focusable.directive";
import { EditableOnEnterDirective } from "./editable/editable-on-enter.directive";

@NgModule({
  declarations: [
    AppComponent,
    EditInPlaceComponent,
    EditableComponent,
    ViewModeDirective,
    EditModeDirective,
    CheckboxComponent,
    FocusableDirective,
    EditableOnEnterDirective,

  ],
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
