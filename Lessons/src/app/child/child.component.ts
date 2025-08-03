import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'KOT-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {

  @Input() childInputProperty : string = "";
  @Output() childOutputProperty = new EventEmitter<any>();

  sendData(){
    this.childOutputProperty.emit("This is the child component data");
  }
}
