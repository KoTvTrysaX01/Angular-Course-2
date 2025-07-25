import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { DataBindingComponent } from '../data-binding/data-binding.component';


// [ngClass] Adds or removes a set of CSS classes
// [ngStyle] Adds or removes a sset of HTMS styles
// [ngModel] Adds two-way data binding to an HTML form element


// Component Directive: Used with a template. This type of directive is the most common directive type
// Structural Directive: Change the appearance or behavior of an elemtn, component or another directive
// Attribute Directive: Change the DOM layout by adding and removing DOM elements

@Component({
  selector: 'KOT-directives',
  imports: [
    NgIf,
    DataBindingComponent
  ],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.scss'
})
export class DirectivesComponent {

}
