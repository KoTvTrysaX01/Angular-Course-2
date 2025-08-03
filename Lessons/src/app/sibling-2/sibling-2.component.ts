import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'KOT-sibling-2',
  imports: [],
  templateUrl: './sibling-2.component.html',
  styleUrl: './sibling-2.component.scss'
})
export class Sibling2Component {

  @Input() sibling2Property : string = "";

  @Output() Sibling2Event = new EventEmitter<any>();

  onSend(data : any){
    this.Sibling2Event.emit(data);
  }
}
