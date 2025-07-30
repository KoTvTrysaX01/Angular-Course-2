import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { of } from 'rxjs';
import { CustomPipe } from '../custom.pipe';
import { PurePipe } from '../pure.pipe';
import { ImpurePipe } from '../impure.pipe';

@Component({
  selector: 'KOT-built-in-pipes',
  imports: [
    CommonModule,
    CustomPipe,
    PurePipe,
    ImpurePipe
  ],
  templateUrl: './built-in-pipes.component.html',
  styleUrl: './built-in-pipes.component.scss'
})
export class BuiltInPipesComponent {

  mobileNumber : any = 1234567890;

  angularPipes: string = "use pipes to format data in angular templates";

  personData = {
    name: 'John',
    age: 30,
    city: 'Mumbai'
  }

  currentDate : Date = new Date();

  items = of(['Apple', 'Banana', 'Mango'])
}
