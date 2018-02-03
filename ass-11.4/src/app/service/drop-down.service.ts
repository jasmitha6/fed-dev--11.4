import { Injectable } from '@angular/core';
// creating class DropDownService for fetching 
@Injectable()
export class DropDownService {

  private genderArray: any[] = [];
  constructor() { }

  getDropDown(): any[] {
    return this.genderArray = [{
      id: 1,
      value: 'Mr'
    },
    {
      id: 1,
      value: 'Mrs'
    }
    ]
  }

}
