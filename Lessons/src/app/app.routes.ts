import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { StructuralDirectiveNgifVsIfComponent } from './structural-directive-ngif-vs-if/structural-directive-ngif-vs-if.component';
import { AttributeDirectivesComponent } from './attribute-directives/attribute-directives.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BuiltInPipesComponent } from './built-in-pipes/built-in-pipes.component';

// Default route must be defined first
// Wildcard route must be defined last

export const routes: Routes = [
    // {path: '', component: UserComponent},
    {path: '', redirectTo: 'user', pathMatch: 'full'},
    {path: 'user', component: UserComponent},
    {path: 'data-binding', component: DataBindingComponent},
    {path: 'structural-directive', component: StructuralDirectiveNgifVsIfComponent},
    {path: 'attribute-directive', component: AttributeDirectivesComponent},
    {path: 'built-in-pipes', component: BuiltInPipesComponent},
    {path: '**', component: PageNotFoundComponent}
];
