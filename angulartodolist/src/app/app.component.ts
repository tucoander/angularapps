import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string = 'Anderson';

  constructor(){
    console.log('ready');
    this.changeName('Olailton');
  }

  changeName(name:string):void {
    this.name = name;
  }
}
