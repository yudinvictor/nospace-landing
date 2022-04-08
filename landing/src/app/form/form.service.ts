import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  success = false;

  emailSended = false;

  formOpened = false;

  occupation = '';

  team: number | undefined;

  email = '';

  tools = '';

  browserAndOs = '';

  problems = '';



  constructor() {
    // @ts-ignore
    window['formService'] = this;
  }
}
