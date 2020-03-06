import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"]
})
export class ContactComponent implements OnInit {
  public contactForm: FormGroup;
  public forbiddenUserNames = ["Mack", "John"];

  constructor() {}

  ngOnInit() {
    this.contactForm = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        this.forbiddenNames.bind(this)
      ]),
      email: new FormControl(null, [
        Validators.email,
        Validators.pattern("[a-z0-9.@]*")
      ]),
      subject: new FormControl(null, Validators.minLength(10)),
      message: new FormControl(null, Validators.required)
    });
  }

  public forbiddenNames(formControl: FormControl): any {
    if (this.forbiddenUserNames.indexOf(formControl.value)) {
      return { nameForbidden: true };
    } else {
      return null;
    }
  }
}
