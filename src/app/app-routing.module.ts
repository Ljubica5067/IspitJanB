import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './comp/product/product.component';
import { JedanComponent } from './comp/jedan/jedan.component';
import { DodavanjeComponent } from './comp/dodavanje/dodavanje.component';

const routes: Routes = 
[
  {path:"products",component:ProductComponent},
  {path:"products/:id",component:JedanComponent},
  {path:"add",component:DodavanjeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
