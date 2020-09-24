import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ContactComponent } from './contact/contact.component';
import { LandingComponent } from './landing/landing.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [

  { path: 'about', component: AboutComponent},
  { path: 'blog', component: BlogsComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'home', component: LandingComponent},
  { path: 'products', component: ProductsComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
