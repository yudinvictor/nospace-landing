import { Component, OnInit } from '@angular/core';
import {FormService} from "../form/form.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public form: FormService) { }

  ngOnInit(): void {
  }

}
