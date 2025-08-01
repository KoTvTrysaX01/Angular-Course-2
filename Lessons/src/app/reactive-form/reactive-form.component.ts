import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'KOT-reactive-form',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss'
})
export class ReactiveFormComponent {

  reactiveForm: FormGroup;

  constructor(){
    this.reactiveForm = new FormGroup({
      firstName : new FormControl(""),
      lastName : new FormControl(""),
      email : new FormControl(""),
      password : new FormControl(),
      isChecked : new FormControl(true),
      address: new FormGroup({
        city: new FormControl(""),
        street: new FormControl(""),
        pincode: new FormControl()
      })
    })

    this.reactiveForm.controls['isChecked'].disable();
  }

  onSubmit(){
    console.log(this.reactiveForm.value)
  }

  setAllValues(){
    this.reactiveForm.setValue({
      firstName : "Vadim",
      lastName : "Elshin",
      email : "example@gmail.com",
      password : "123456",
      isChecked : true,
      address : {
        city : 'New York',
        street : "Emprire Street",
        pincode : 12345
      }
    })
  }

  setPartialValue(){
    this.reactiveForm.patchValue({
      address : {
        city : 'New York',
        street : "Emprire Street",
        pincode : 12345
      }
    })

    this.reactiveForm.controls['firstName'].patchValue('KoT');
  }

  resetForm(){
    // this.reactiveForm.reset();
    this.reactiveForm.controls['firstName'].reset();
  }




  
}
