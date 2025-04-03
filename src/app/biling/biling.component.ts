// // // import { Component } from '@angular/core';
// // // import { Router } from '@angular/router';

// // // @Component({
// // //   selector: 'app-billing',
// // //   templateUrl: './biling.component.html',
// // //   styleUrls: ['./biling.component.css']
// // // })
// // // export class BillingComponent {
// // //   selectedCourse: any;
// // //   quantity: number = 1;
// // //   totalPrice: number = 0;
// // //   showInvoice = false;

// // //   constructor(private router: Router) {
// // //     const state = this.router.getCurrentNavigation()?.extras.state;
// // //     this.selectedCourse = state ? state['selectedCourse'] : null;

// // //     if (this.selectedCourse) {
// // //       console.log("Selected Course Data:", this.selectedCourse); // Debugging
// // //       console.log("Course Name:", this.selectedCourse?.name);
// // //       this.calculateTotal();
// // //     } else {
// // //       console.error("Error: No course data received!");
// // //     }
// // //   }

// // //   calculateTotal() {
// // //     this.totalPrice = this.selectedCourse?.price * this.quantity || 0;
// // //   }

// // //   proceedToPayment() {
// // //     this.showInvoice = true;
// // //   }
// // // }

// // import { Component } from '@angular/core';
// // import { Router } from '@angular/router';

// // @Component({
// //   selector: 'app-billing',
// //   templateUrl: './biling.component.html',
// //   styleUrls: ['./biling.component.css']
// // })
// // export class BillingComponent {
// //   selectedCourse: any;
// //   quantity: number = 1;
// //   totalPrice: number = 0;
// //   showInvoice = false; // 🔹 Invoice initially hidden

// //   constructor(private router: Router) {
// //     const state = this.router.getCurrentNavigation()?.extras.state;
// //     this.selectedCourse = state ? state['selectedCourse'] : null;

// //     console.log('Selected Course:', this.selectedCourse); // ✅ Debugging Purpose

// //     if (this.selectedCourse) {
// //       this.calculateTotal();
// //     } else {
// //       console.error("Error: No course data received!");
// //     }
// //   }

// //   // ✅ Calculate Total Price
// //   calculateTotal() {
// //     this.totalPrice = this.selectedCourse?.price * this.quantity || 0;
// //   }

// //   // ✅ Show Invoice on Click
// //   proceedToPayment() {
// //     this.showInvoice = true; // Invoice ko visible karna
// //   }
// // }

// import { Component } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-billing',
//   templateUrl: './biling.component.html',
//   styleUrls: ['./biling.component.css']
// })
// export class BillingComponent {
//   selectedCourse: any;
//   quantity: number = 1;
//   totalPrice: number = 0;
//   showInvoice = false;
//   email: string = '';  // Email field for validation
//   errorMessage: string = '';  // To show error message if email is invalid

//   constructor(private router: Router) {
//     const state = this.router.getCurrentNavigation()?.extras.state;
//     this.selectedCourse = state ? state['selectedCourse'] : null;

//     console.log('Selected Course:', this.selectedCourse); // ✅ Debugging Purpose

//     if (this.selectedCourse) {
//       this.calculateTotal();
//     } else {
//       console.error("Error: No course data received!");
//     }
//   }

//   // ✅ Calculate Total Price
//   calculateTotal() {
//     this.totalPrice = this.selectedCourse?.price * this.quantity || 0;
//   }

//   // ✅ Show Invoice on Click
//   proceedToPayment() {
//     // Retrieve stored email from localStorage (used for login)
//     const storedEmail = localStorage.getItem('email');
    
//     // Check if email entered matches the one stored in localStorage
//     if (this.email === storedEmail) {
//       this.showInvoice = true; // Invoice ko visible karna
//       this.errorMessage = '';  // Clear any error message
//     } else {
//       this.errorMessage = 'The email you entered does not match the logged-in email. Please try again.';  // Show error message
//     }
//   }
// }


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-billing',
  templateUrl: './biling.component.html',
  styleUrls: ['./biling.component.css']
})
export class BillingComponent implements OnInit {
  selectedCourse: any;
  quantity: number = 1;
  totalPrice: number = 0;
  showInvoice = false;
  email: string = '';  // Email field for validation
  storedEmail: string | null = ''; // Email retrieved from localStorage
  errorMessage: string = '';  // To show error message if email is invalid

  constructor(private router: Router) {
    const state = this.router.getCurrentNavigation()?.extras.state;
    this.selectedCourse = state ? state['selectedCourse'] : null;
  }

  ngOnInit() {
    // ✅ Retrieve stored user object from localStorage
    const storedUser = localStorage.getItem('user');
    
    if (storedUser) {
      // ✅ Extract email from the stored user object
      const userData = JSON.parse(storedUser);
      this.storedEmail = userData.email;
    }

    if (this.selectedCourse) {
      this.calculateTotal();
    } else {
      console.error("Error: No course data received!");
    }
  }

  // ✅ Calculate Total Price
  calculateTotal() {
    this.totalPrice = this.selectedCourse?.price * this.quantity || 0;
  }

  // ✅ Show Invoice on Click
  proceedToPayment() {
    console.log('Stored Email:', this.storedEmail);
    console.log('Entered Email:', this.email);

    if (this.email.trim() === this.storedEmail?.trim()) {
      this.showInvoice = true;
      this.errorMessage = ''; // Clear error message
    } else {
      this.errorMessage = 'The email you entered does not match the logged-in email. Please try again.';
    }
  }
}
