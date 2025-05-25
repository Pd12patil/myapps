import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {
  courseId: number | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.courseId = Number(this.route.snapshot.paramMap.get('id'));
  }

  title = 'Introduction to Angular v16';
  showInfo = {
    first: false,
    second: false,
    third: false,
    four: false,
    five: false,
    six: false,
    seven: false,
    eight: false,
    nine: false,
    ten: false,
    eleven: false

  };

  toggleInfo(section: 'first' | 'second' |'third' | 'four' | 'five' |'six' | 'seven' | 'eight' | 'nine' | 'ten' | 'eleven'): void {  // Restrict to 'first' or 'second' only
    this.showInfo[section] = !this.showInfo[section];
  }

  a: number = 10;
  b: number = 5;






  confirmResponse: boolean | null = null;
  userAge: string | null = null;
  ageMessage: string | null = null;


  // getConfirmation() {
  //   this.confirmResponse = confirm("Do you want to cancel this order?");
  // }

  // getUserAge() {
  //   const age = prompt("Enter Your Age: ");
  //   this.userAge = age;
  //   this.ageMessage = age ? `You are ${age} years old.` : "No age entered.";
  // }
}
