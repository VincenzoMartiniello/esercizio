import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './errorHandling/error/error.component';
import { WrapperComponent } from './wrapper/wrapper-component/wrapper.component';
const routes: Routes = [
  {path: "", component: WrapperComponent },
  {path :'error', component:ErrorComponent},

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
