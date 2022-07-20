import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { CardComponent } from './card/card.component';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from '../order/cart/cart.component';
import { SharedModule } from '../shared/shared.module';
import { ProductService } from 'src/app/Services/product.service';
import {DxDataGridModule}from "devextreme-angular"

let prdRoutes :Routes=[
  {path:'list',component:ListComponent},
  {path:'details/:id',component:DetailsComponent},
  {path:'cart',component:CartComponent},
]


@NgModule({
  declarations: [
    ListComponent,
    DetailsComponent,
    CardComponent,

  ],
  providers:[ProductService],
  imports: [
    SharedModule,
    RouterModule.forChild(prdRoutes),
    DxDataGridModule
  ],
  exports:[
    RouterModule,
  ]
})
export class ProductModule { }
