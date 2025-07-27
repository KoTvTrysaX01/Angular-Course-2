import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from "./user/user.component";
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { StructuralDirectiveNgifVsIfComponent } from './structural-directive-ngif-vs-if/structural-directive-ngif-vs-if.component';
import { StructuralDirectiveNgforVsForComponent } from "./structural-directive-ngfor-vs-for/structural-directive-ngfor-vs-for.component";

@Component({
  selector: 'app-root',
  imports: [
    // RouterOutlet,
    // UserComponent,
    // DataBindingComponent
    // DirectivesComponent,
    // StructuralDirectiveNgifVsIfComponent,
    StructuralDirectiveNgforVsForComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Lessons';
}
