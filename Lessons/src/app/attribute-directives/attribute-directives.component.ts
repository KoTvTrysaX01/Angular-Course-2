import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'KOT-attribute-directives',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './attribute-directives.component.html',
  styleUrl: './attribute-directives.component.scss'
})
export class AttributeDirectivesComponent {
  //1
  textColor: string = 'text-success';
  StyleColor: string = "orange"

  changeColor(color: string){
    this.textColor = color;
  }
  updateColor(ngStyleColor: string){
    this.StyleColor = ngStyleColor;
  }

  //2
  isTextGreen : boolean = false;
  isTextOrange : boolean = false;

  //3
  userClass : string = '';

  customClass : any = {
    'color': 'pink',
    'height': '150px',
    'width': '400px',
    'border': '1px solid black'
  }
}
