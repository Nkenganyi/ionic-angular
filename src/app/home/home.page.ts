import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  text = "Default Starting Text";
  num = 0;
  constructor() {}

  onChangeText(){
    this.text = 'Changed! ' + this.num++;
  }

  reset(){
    this.text = "Default Starting Text";
    this.num = 0;
  }
}
