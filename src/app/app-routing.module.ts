// // import { NgModule } from '@angular/core';
// // import { RouterModule, Routes } from '@angular/router';
// // import { HomeComponent } from './home/home.component'; // ✅ Import HomeComponent
// // import { CoursesComponent } from './courses/courses.component';
// // import { AboutComponent } from './about/about.component';
// // import { ContactComponent } from './contact/contact.component';
// // import { LoginComponent } from './login/login.component';
// // import { BilingComponent } from './biling/biling.component';
// // import { CourseDetailComponent } from './course-detail/course-detail.component';

// // const routes: Routes = [
// //   { path: '', component: HomeComponent }, // ✅ Set HomeComponent as the default page
// //   { path: 'courses', component: CoursesComponent },
// //   {path:'biling',component:BilingComponent},
// //   {path:'course-detail',component:CourseDetailComponent},
// //   { path: 'about', component: AboutComponent },
// //   { path: 'contact', component: ContactComponent },
// //   { path: 'login', component: LoginComponent },
// //   { path: '**', redirectTo: '' } // Redirect unknown routes to Home
// // ];

// // @NgModule({
// //   imports: [RouterModule.forRoot(routes)],
// //   exports: [RouterModule]
// // })
// // export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { AboutComponent } from './about/about.component';
import { DppComponent } from './dpp/dpp.component'; // ✅ Fix: Use correct casing
import { LoginComponent } from './login/login.component';
import { BillingComponent } from './biling/biling.component'; // ✅ Fixed spelling
import { CourseDetailComponent } from './course-detail/course-detail.component';  // ✅ Make sure this is correct

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'billing', component: BillingComponent }, // ✅ Billing page
  { path: 'course-detail/:id', component: CourseDetailComponent }, // ✅ Dynamic route with ID
  { path: 'about', component: AboutComponent },
  { path: 'dpp', component: DppComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '' } // Redirect unknown routes to home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




