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
    this.http.post('', {
      email: this.form.email,
      team: this.form.team,
      occupation: this.form.occupation,
      tools: this.form.tools,
      browserAndOs: this.form.browserAndOs,
      problems: this.form.problems,
    }).subscribe(() => {
      this.form.success = true;
    })
  }

  get emailIsInvalid(): boolean {

    if (this.form.emailSended) {
      return false;
    }

    const idx1 = this.form.email.indexOf('@');
    const idx2 = this.form.email.indexOf('.');
    const len = this.form.email.length;

    return len === 0 ||
      idx1 === -1 ||
      idx2 === -1 ||
      idx1 === len - 1 ||
      idx2 === len - 1;
  }

  get formIsInvalid(): boolean {
    return this.emailIsInvalid
      || this.form.team === undefined
      || this.form.occupation.trim() === '';
  }


}
