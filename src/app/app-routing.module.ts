import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BatmanComponent } from './batman/batman.component';
import { MainComponent } from './main/main.component';
import { SpiderManComponent } from './spider-man/spider-man.component';
import { SupermanComponent } from './superman/superman.component';
import { ThorComponent } from './thor/thor.component';

const routes: Routes = [
  {path:"", component:MainComponent},
  {path:"batman", component:BatmanComponent},
  {path:"superman", component:SupermanComponent},
  {path:"spider-man", component:SpiderManComponent},
  {path:"thor", component:ThorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
