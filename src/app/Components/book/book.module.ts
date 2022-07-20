import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { DetailsComponent } from './details/details.component';
import { RouterModule, Routes } from '@angular/router';


let routes :Routes=[
  {path:'',component:ListComponent},
  {path:'create',component:AddComponent},
  {path:'details/:id',component:DetailsComponent},
]

@NgModule({
  declarations: [
    ListComponent,
    AddComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class BookModule { }
