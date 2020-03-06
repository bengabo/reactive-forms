import { Component, OnInit, Input, Output, QueryList } from "@angular/core";
import { FormGroup, FormArray, FormControl, Validators } from "@angular/forms";
import { ATTRIBUTES } from "../mock-attributes";
import { BaseType } from "../shared/BaseType";

interface Constraint {
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
    { value: "unique-0", viewValue: "Unique" },
    { value: "not_null-1", viewValue: "Not Null" },
    { value: "min_length-2", viewValue: "Min length" },
    { value: "max_length-3", viewValue: "Max length" }
  ];

  entities = ATTRIBUTES;

  controls: FormArray;

  ngOnInit() {
    const toGroups = this.entities.map(entity => {
      return new FormGroup({
        name: new FormControl(entity.name, Validators.required),
        isAdmin: new FormControl(entity.isAdmin),
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

  contraintKeyToDisplay(key: string) {
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
