import { Component, OnInit } from '@angular/core';
import {FormService} from "../form/form.service";
import {Subject} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  homeImages = [
    '/assets/home/home-tasks.png',
    '/assets/home/home-editor.png',
    '/assets/home/home-whiteboard.png',
    '/assets/home/home-chat.png',
  ];

  idx = 0;

  active = [{src: this.homeImages[0]}];

  constructor(public form: FormService) { }

  ngOnInit(): void {

    setInterval(() => {
      this.idx = (this.idx + 1) % 4
      this.active = [{ src: this.homeImages[this.idx]}]
    }, 5200);

  }

  submit() {
    this.form.sendEmail().subscribe((res) => {
      this.form.id = res.id;
      this.form.emailSended = true;
      this.form.formOpened = true;
    })

  }
}
