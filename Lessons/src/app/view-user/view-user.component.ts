import { Component } from '@angular/core';
import { CrudService } from '../crud.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'KOT-view-user',
  imports: [],
  templateUrl: './view-user.component.html',
  styleUrl: './view-user.component.scss'
})
export class ViewUserComponent {



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
