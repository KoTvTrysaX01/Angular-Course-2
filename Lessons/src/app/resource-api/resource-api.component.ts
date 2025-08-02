import { Component, OnInit } from '@angular/core';
import { ResourceService } from '../Services/resource.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'KOT-resource-api',
  imports: [CommonModule],
  templateUrl: './resource-api.component.html',
  styleUrl: './resource-api.component.scss'
})
export class ResourceApiComponent implements OnInit{

  constructor(private resource : ResourceService){}

  apiData : any;

  getData(){
    // this.resource.getAllData().subscribe(res => {
    //   this.apiData = res;
    // })

    //this.apiData = this.resource.rxResourceData;

    this.apiData = this.resource.resourceData;

  }

  ngOnInit(): void {
    this.getData();
  }
}
