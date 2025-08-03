import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ChildComponent } from "../child/child.component";
import { Sibling1Component } from '../sibling-1/sibling-1.component';
import { Sibling2Component } from '../sibling-2/sibling-2.component';
import { ReusableComponent } from "../reusable/reusable.component";

@Component({
  selector: 'KOT-parent',
  imports: [ChildComponent, Sibling1Component, Sibling2Component, ReusableComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent implements AfterViewInit{

  parentProperty: string = "This is the parent component data";

  receiveMessage: string = "";
  receiveData(data: any) {
    this.receiveMessage = data;
  }

  sibling1Data : any;
  receiveEvent1(data : any){
    this.sibling1Data = data;
    console.log(this.sibling1Data);
  }

  sibling2Data : any;
  receiveEvent2(data : any){
    this.sibling2Data = data;
  }

  @ViewChild('reusable') reusableCom : ReusableComponent;

  ngAfterViewInit(): void {
    // this.reusableCom.childProperty = "Greeting from Parent Component."
  }
}
