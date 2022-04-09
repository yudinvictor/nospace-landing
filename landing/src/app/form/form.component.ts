import {Component, OnInit} from '@angular/core';
import {FormService} from "./form.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(
    public form: FormService,
    private http: HttpClient,
  ) {
  }

  ngOnInit(): void {
  }

  submit(): void {
    this.form.sendInfo().subscribe(() => {
      this.form.success = true;
    })
  }


  get formIsInvalid(): boolean {
    return this.form.emailIsInvalid
      || this.form.team === undefined
      || this.form.occupation.trim() === '';
  }


}
