import { Component, OnInit } from '@angular/core';
import {FormService} from "./form.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(public form: FormService) { }

  ngOnInit(): void {
  }

}
