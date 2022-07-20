import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./Components/home/home.component";

const myAppRoutes :Routes = [
    {path:"",component:HomeComponent},
    {
        path: 'product', 
        loadChildren: () => import('./Components/product/product.module').then(m => m.ProductModule)
    },
    {
        path: 'order', 
        loadChildren: () => import('./Components/order/order.module').then(m => m.OrderModule)
    },
    {
        path: 'job', 
        loadChildren: () => import('./job/job.module').then(m => m.JobModule)
    },

]
@NgModule({
    imports:[RouterModule.forRoot(myAppRoutes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}