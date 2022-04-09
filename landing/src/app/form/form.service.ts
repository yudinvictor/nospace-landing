import { Injectable } from '@angular/core';
import {Observable, switchMap, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FormService {

  id: string = '';

  urlCreate = 'https://app.usestack.app:7998/create/';

  urlUpdate = 'https://app.usestack.app:7998/update/'

  success = false;

  emailSended = false;

  formOpened = false;

  occupation = '';

  team: number | undefined;

  email = '';

  tools = '';

  browserAndOs = '';

  problems = '';

  get emailIsInvalid(): boolean {

    if (this.emailSended) {
      return false;
    }

    const idx1 = this.email.indexOf('@');
    const idx2 = this.email.indexOf('.');
    const len = this.email.length;

    return len === 0 ||
      idx1 === -1 ||
      idx2 === -1 ||
      idx1 === len - 1 ||
      idx2 === len - 1;
  }

  sendEmail(): Observable<any> {
    return this.http.post(this.urlCreate, {
      contact: this.email,
      info: {email: this.email}
    });
  }

  sendInfo(): Observable<any> {
    if (!this.emailSended) {
      return this.sendEmail().pipe(
        tap(res => this.id = res.id),
        switchMap(() => this._sendInfo())
      )
    }
    return this._sendInfo();
  }

  _sendInfo(): Observable<any> {
    return this.http.put(this.urlUpdate + this.id + '/', {
      info: {
        email: this.email,
        team: this.team,
        occupation: this.occupation,
        tools: this.tools,
        browserAndOs: this.browserAndOs,
        problems: this.problems,
      }
    })
  }

  constructor(private http: HttpClient) {
  }

}
