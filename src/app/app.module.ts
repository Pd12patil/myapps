// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { AppRoutingModule } from './app-routing.module'; 
// import { AppComponent } from './app.component';
// import { CoursesComponent } from './courses/courses.component';
// import { AboutComponent } from './about/about.component';
// import { ContactComponent } from './contact/contact.component';
// import { LoginComponent } from './login/login.component';
// import { HomeComponent } from './home/home.component';
// import { BilingComponent } from './biling/biling.component';
// import { CourseDetailComponent } from './course-detail/course-detail.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     CoursesComponent,
//     AboutComponent,
//     ContactComponent,
//     LoginComponent,
//     HomeComponent,
//     BilingComponent,
//     CourseDetailComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule {}  // ✅ Ensure AppModule is exported


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; 
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DppComponent } from './dpp/dpp.component'; // ✅ Fix: Use correct casing
import { BillingComponent } from './biling/biling.component'; // ✅ Corrected spelling
import { CourseDetailComponent } from './course-detail/course-detail.component'; // ✅ Corrected name
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    AboutComponent,
    DppComponent,
    LoginComponent,
    HomeComponent,
    BillingComponent, // ✅ Corrected spelling
    CourseDetailComponent // ✅ Corrected name
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {} 
