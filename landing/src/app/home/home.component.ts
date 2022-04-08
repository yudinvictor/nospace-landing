import { Component, OnInit } from '@angular/core';
import {FormService} from "../form/form.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public form: FormService) { }

  ngOnInit(): void {
  }

}
