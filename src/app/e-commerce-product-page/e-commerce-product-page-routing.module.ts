import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductHomeComponent } from './components/product-home/product-home.component';

const routes: Routes = [
  {
    path: '',
    component: ProductHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ECommerceProductPageRoutingModule { }
