import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'KOT-sibling-1',
  imports: [],
  templateUrl: './sibling-1.component.html',
  styleUrl: './sibling-1.component.scss'
})
export class Sibling1Component {

  @Output() sibling1Event = new EventEmitter<any>();
  @Input() sibling1Property : string = "";

  onSubmit(data : any){
    this.sibling1Event.emit(data);
  }
}
