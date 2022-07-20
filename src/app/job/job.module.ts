import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../Components/shared/shared.module';
import { JopServices } from '../Services/jop.service';
import { ListComponent } from './list/list.component';

let routes :Routes=[
  {path:'',component:ListComponent}
]

@NgModule({
  declarations: [ListComponent],
  providers:[JopServices],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class JobModule { }
