import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componant/home/home.component';
import { AboutusComponent } from './componant/aboutus/aboutus.component';
import { ContactUsComponent } from './componant/contact-us/contact-us.component';
import { UserLoginComponent } from './componant/user/user-login/user-login.component';
import { ForgotPasswordComponent } from './componant/forgot-password/forgot-password.component';
import { AdminHomeComponent } from './componant/admin/admin-home/admin-home.component';
import { UserHomeComponent } from './componant/user/user-home/user-home.component';
import { UserCartComponent } from './componant/user/user-cart/user-cart.component';
import { UserOrderComponent } from './componant/user/user-order/user-order.component';
import { AdminAddbookComponent } from './componant/admin/admin-addbook/admin-addbook.component';
import { AdminHeaderComponent } from './componant/admin/admin-header/admin-header.component';
import { AdminOrderlistComponent } from './componant/admin/admin-orderlist/admin-orderlist.component';
import { AdminListbookComponent } from './componant/admin/admin-listbook/admin-listbook.component';
import { UserSignupComponent } from './componant/user/user-signup/user-signup.component';
import { ChangepasswordComponent } from './componant/changepassword/changepassword.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'contactus',component:ContactUsComponent},
  {path:'user-login',component:UserLoginComponent},
  {path:'user-signup',component:UserSignupComponent},
  {path:'forgot-password',component:ForgotPasswordComponent},
  {path:'change-password',component:ChangepasswordComponent},
  
  
    {path:'admin',children:[

      {path:'home',component:AdminHomeComponent},
      {path:'addbook',component:AdminAddbookComponent},
      {path:'header',component:AdminHeaderComponent},
      {path:'order-list',component:AdminOrderlistComponent},
      {path:'booklist',component:AdminListbookComponent},
  
      
    ]},
  
  {path:'user',children:[
    {path:'home',component:UserHomeComponent},
    {path:'cart',component:UserCartComponent},
    {path:'order',component:UserOrderComponent},
    {path:'login',component:UserLoginComponent}
   ]} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
