import { Component, OnInit, Input, Output, QueryList } from "@angular/core";
import { FormGroup, FormArray, FormControl, Validators } from "@angular/forms";
import { ATTRIBUTES } from "../mock-attributes";
import { BaseType } from "../shared/BaseType";

@Component({
  selector: "app-edit-in-place",
  templateUrl: "./edit-in-place.component.html",
  styleUrls: ["./edit-in-place.component.scss"]
})
export class EditInPlaceComponent {
  entities = ATTRIBUTES;

  controls: FormArray;

  ngOnInit() {
    const toGroups = this.entities.map(entity => {
      const a = new FormControl(entity.isAdmin);
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
    // console.log(index, field);
    return this.controls.at(index).get(field) as FormControl;
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

  constructor() { }

  keysTypes = Object.keys(BaseType);
}
