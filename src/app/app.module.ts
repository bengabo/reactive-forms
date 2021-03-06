import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatChipsModule } from "@angular/material/chips";
import {MatFormFieldModule} from '@angular/material/form-field';


import { AppComponent } from "./app.component";
import { EditableComponent } from "./editable/editable.component";
import { ViewModeDirective } from "./editable/view-mode.directive";
import { EditModeDirective } from "./editable/edit-mode.directive";
import { CheckboxComponent } from "./checkbox/checkbox.component";
import { EditInPlaceComponent } from "./edit-in-place/edit-in-place.component";
import { FocusableDirective } from "./focusable.directive";
import { EditableOnEnterDirective } from "./editable/editable-on-enter.directive";
import { MaterialModule } from "./material-module";
import { BasicFormComponent } from "./basic-form/basic-form.component";
import { ArrayFormComponent } from "./array-form/array-form.component";

@NgModule({
  declarations: [
    AppComponent,
    CheckboxComponent,
    EditableComponent,
    EditableOnEnterDirective,
    EditInPlaceComponent,
    EditModeDirective,
    FocusableDirective,
    ViewModeDirective,
    BasicFormComponent,
    ArrayFormComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCheckboxModule,
    MatChipsModule,
    MatInputModule,
    MaterialModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
