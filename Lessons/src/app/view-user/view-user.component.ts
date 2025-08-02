import { Component } from '@angular/core';
import { CrudService } from '../crud.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { ReusableComponent } from "../reusable/reusable.component";

@Component({
  selector: 'KOT-view-user',
  imports: [ReusableComponent],
  templateUrl: './view-user.component.html',
  styleUrl: './view-user.component.scss'
})
export class ViewUserComponent {


    parentProperty : string = "Update-View : Kindly view the user details";


  constructor(private crud: CrudService, private activeRoute: ActivatedRoute, private router: Router) { }


  userData: any;
  userId: { uid: number; }

  ngOnInit(): void {
    // this.userData = {id: 0, name: "Vadim", username: "KoT", email: "example@gmail.com"}

    this.userId = { uid: this.activeRoute.snapshot.params['id'] }
    console.log(this.userId.uid);
    this.crud.getDataById(this.userId.uid).subscribe(res => {
      this.userData = res;
    });
  }

  onClose(){
    this.router.navigateByUrl('crud')
  }
}
