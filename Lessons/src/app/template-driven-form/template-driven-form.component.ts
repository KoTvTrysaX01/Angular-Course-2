import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../user';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'KOT-template-driven-form',
  imports: [
    FormsModule,
    JsonPipe
  ],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.scss'
})
export class TemplateDrivenFormComponent implements OnInit {


  userObject: User = {

  }

  onSubmit(userForm: NgForm) {
    console.log(userForm.value)
  }

  ngOnInit(): void {
    // this.userObject = {
    //   firstName : "Vadim",
    //   lastName: "Elshin",
    //   email: "example@gmail.com",
    //   pass: "123",
    //   isCkeck: true
    // }
  }

  setValues(userForm: NgForm) {
    let obj = {
      firstName: "Vadim",
      lastName: "Elshin",
      email: "example@gmail.com",
      pass: "123",
      isCheck: true,
    }
    userForm.setValue(obj);
  }

  patchValues(userForm: NgForm) {
    let obj = {
      firstName: "Vadim",
      lastName: "Elshin",
      email: "example@gmail.com"
    }
    userForm.control.patchValue(obj);
  }

  resetValues(userForm: NgForm){
    // userForm.reset();
    userForm.resetForm();
  }

}
