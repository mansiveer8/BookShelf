import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutusComponent } from './componant/aboutus/aboutus.component';
import { HomeComponent } from './componant/home/home.component';
import { AppHeaderComponent } from './componant/app-header/app-header.component';
import { ChangepasswordComponent } from './componant/changepassword/changepassword.component';
import { ContactUsComponent } from './componant/contact-us/contact-us.component';
import { PagingComponent } from './componant/paging/paging.component';
import { AdminHeaderComponent } from './componant/admin/admin-header/admin-header.component';
import { AdminHomeComponent } from './componant/admin/admin-home/admin-home.component';
import { AdminAddbookComponent } from './componant/admin/admin-addbook/admin-addbook.component';
import { AdminListbookComponent } from './componant/admin/admin-listbook/admin-listbook.component';
import { AdminOrderlistComponent } from './componant/admin/admin-orderlist/admin-orderlist.component';
import { UserHeaderComponent } from './componant/user/user-header/user-header.component';
import { UserLoginComponent } from './componant/user/user-login/user-login.component';
import { UserSignupComponent } from './componant/user/user-signup/user-signup.component';
import { UserOrderComponent } from './componant/user/user-order/user-order.component';
import { UserOrderHistoryComponent } from './componant/user/user-order-history/user-order-history.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatMenuModule} from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from './footer/footer.component';
import { DatePipe } from '@angular/common';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { UserCartComponent } from './componant/user/user-cart/user-cart.component';
import { UserHomeComponent } from './componant/user/user-home/user-home.component';
import { ForgotPasswordComponent } from './componant/forgot-password/forgot-password.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { BookstoreService } from '../bookstore.service';



@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    HomeComponent,
    AppHeaderComponent,
    ChangepasswordComponent,
    ContactUsComponent,
    PagingComponent,
    AdminHeaderComponent,
    AdminHomeComponent,
    AdminAddbookComponent,
    AdminListbookComponent,
    AdminOrderlistComponent,
    UserHeaderComponent,
    UserLoginComponent,
    UserSignupComponent,
    UserOrderComponent,
    UserOrderHistoryComponent,
    FooterComponent,
    UserCartComponent,
    UserHomeComponent,
    ForgotPasswordComponent
    
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatIconModule,
    MatMenuModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatRippleModule,
    MatNativeDateModule,
    MatInputModule,
    MatDialogModule,
    MatIconModule,
    MatButtonToggleModule
   
  ],
  providers: [DatePipe,
    BookstoreService,
    MatDialog,
    {
      provide: MAT_DIALOG_DATA,
      useValue: {}
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
