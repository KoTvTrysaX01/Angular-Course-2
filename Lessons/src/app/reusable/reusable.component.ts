import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'KOT-reusable',
  imports: [],
  templateUrl: './reusable.component.html',
  styleUrl: './reusable.component.scss'
})
export class ReusableComponent {

  @Input() childProperty : string = "Hello All : Welcome to FED Learning";

  @HostListener('click')
  onClick(){
    console.log("Button clicked");
  }
}
