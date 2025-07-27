import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'KOT-structural-directive-ngfor-vs-for',
  imports: [
    CommonModule
  ],
  templateUrl: './structural-directive-ngfor-vs-for.component.html',
  styleUrl: './structural-directive-ngfor-vs-for.component.scss'
})
export class StructuralDirectiveNgforVsForComponent {
    employees : any[] = [
      {empName: 'Vadim',empNumber: 101,empEmail: 'vadim@mail.com',empDept: 'IT'},
      {empName: 'Danila',empNumber: 102,empEmail: 'danila@mail.com',empDept: 'QA'},
      {empName: 'Anastasia',empNumber: 103,empEmail: 'anastasia@mail.com',empDept: 'HR'},
    ]

    companyList: string[] = ['Atos', 'Capgemini', 'Accenture', 'TCS']
}
