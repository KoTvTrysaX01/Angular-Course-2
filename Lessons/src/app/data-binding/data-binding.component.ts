import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'KOT-data-binding',
  imports: [
    FormsModule
  ],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.scss'
})
export class DataBindingComponent {
  name: string = "FEDLearning";
  topic: string = "Data Binding";
  image: string = "https://th.bing.com/th/id/OIP.5VbaB-DppFZVGQDjrJs1tAAAAA?w=117&h=128&c=7&r=0&o=5&pid=1.7";
  random = "";

  onSave(){
    alert("Data saved succesfully")
  }

  onChange(){
    alert("Country has changed")
  }
}
