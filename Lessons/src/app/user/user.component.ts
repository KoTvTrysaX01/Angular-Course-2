import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [
    RouterLink
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  topic: any;

  constructor(private router: Router) {
    this.topic = "Angular 19";
    console.log("Constructor called.");
  }
  

  ngOnChanges(changes: SimpleChanges): void {
    // is used for components input property
    console.log("1. ngOnChanges called.");
  }

  ngOnInit(): void {
    // is used for an API call
    console.log("2. ngOnInit called.");
  }

  ngDoCheck(): void {
    // is used for every change detection
    console.log("3. ngDoCheck called.");
  }

  ngAfterContentInit(): void {
    // is used for ng-content
    console.log("4. ngAfterContentInit called.");
  }

  ngAfterContentChecked(): void {
    console.log("5. ngAfterContentChecked called.");
  }

  ngAfterViewInit(): void {
    // is used for viewChild
    console.log("6. ngAfterViewInit called.");
  }

  ngAfterViewChecked(): void {
    console.log("7. ngAfterViewChecked called.");
  }
   
  ngOnDestroy(): void {
    console.log("8. ngOnDestroy called.");
  }







  loginData() {
    //user verification logic
    // this.router.navigateByUrl("structural-directive")
    this.router.navigate(['structural-directive'])
  }
}
