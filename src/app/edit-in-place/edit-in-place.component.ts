import { Component, OnInit, Input, Output, QueryList } from "@angular/core";
import { FormGroup, FormArray, FormControl, Validators } from "@angular/forms";
import { ATTRIBUTES } from "../mock-attributes";
import { BaseType } from "../shared/BaseType";

interface Constraint {
  value: string;
  viewValue: string;
}

interface Type {
  value: string;
  viewValue: string;
}

@Component({
  selector: "app-edit-in-place",
  templateUrl: "./edit-in-place.component.html",
  styleUrls: ["./edit-in-place.component.scss"]
})
export class EditInPlaceComponent {
  constraints: Constraint[] = [
    { value: "unique-0", viewValue: "unique" },
    { value: "not_null-1", viewValue: "not null" },
    { value: "min_length-2", viewValue: "min length" },
    { value: "max_length-3", viewValue: "max length" }
  ];

  types: Type[] = [
    { value: "string-0", viewValue: "string"},
    { value: "float-1", viewValue: "float" },
    { value: "integer-2", viewValue: "integer" },
    { value: "boolean-3", viewValue: "boolean" },
  ];

  entities = ATTRIBUTES;

  controls: FormArray;

  ngOnInit() {
    const toGroups = this.entities.map(entity => {
      return new FormGroup({
        name: new FormControl(entity.name, Validators.required),
        isAdmin: new FormControl(entity.isAdmin),
        type: new FormControl(entity.type),
        constraint: new FormControl(entity.constraint)
      });
    });
    this.controls = new FormArray(toGroups);
    // console.log(this.controls.at(0));
  }

  getControl(index: number, field: string): FormControl {
    console.log(index, field);
    return this.controls.at(index).get(field) as FormControl;
  }

  typeKeyToDisplay(key: string) {
    const type = this.types.find(t => t.value === key);
    return type.viewValue;
  }

  constraintKeyToDisplay(key: string) {
    const constraint = this.constraints.find(c => c.value === key);
    return constraint.viewValue;
  }

  updateField(index: number, field: string) {
    const control = this.getControl(index, field);

    if (control.valid) {
      this.entities = this.entities.map((e, i) => {
        if (index === i) {
          return {
            ...e,
            [field]: control.value
          };
        }
        return e;
      });
    }
  }

  constructor() {}

  keysTypes = Object.keys(BaseType);
}
