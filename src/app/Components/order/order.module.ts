import { NgModule } from '@angular/core';
import { CartComponent } from './cart/cart.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { JopServices } from 'src/app/Services/jop.service';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

let routes :Routes=[
  {path:'',component:ListComponent}
]

@NgModule({
  declarations: [
    CartComponent,
    ListComponent,
    DetailsComponent
  ],
  providers:[
    JopServices
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class OrderModule { }
